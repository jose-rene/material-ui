import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import { exactProp } from '@material-ui/utils';
import createGenerateClassName from '../createGenerateClassName';
import { create } from 'jss';
import jssPreset from '../jssPreset';

// Default JSS instance.
const jss = create(jssPreset());

// Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.
const generateClassName = createGenerateClassName();

// Exported for test purposes
export const sheetsManager = new Map();

const defaultOptions = {
  disableGeneration: false,
  generateClassName,
  jss,
  sheetsCache: typeof window === 'undefined' ? new Map() : null,
  sheetsManager,
  sheetsRegistry: null,
};

export const StylesContext = React.createContext(defaultOptions);

let injectFirstNode;

function StylesProvider(props) {
  const {
    children,
    generateClassName: generateClassNameProp,
    injectFirst,
    ...localOptions
  } = props;

  const outerOptions = React.useContext(StylesContext);
  const context = { ...outerOptions, ...localOptions };

  warning(
    typeof window !== 'undefined' || context.sheetsManager,
    'Material-UI: you need to provide a sheetsManager to the <StyleProvider> ' +
      'when rendering on the server.',
  );

  if (generateClassNameProp) {
    context.generateClassName = generateClassNameProp;
  }

  warning(
    !context.jss.options.insertionPoint || !injectFirst,
    'Material-UI: you cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.',
  );

  if (!context.jss.options.insertionPoint && injectFirst && typeof window !== 'undefined') {
    if (!injectFirstNode) {
      const head = document.head;
      injectFirstNode = document.createComment('mui-inject-first');
      head.insertBefore(injectFirstNode, head.firstChild);
    }
    context.jss.options.insertionPoint = injectFirstNode;
  }

  return <StylesContext.Provider value={context}>{children}</StylesContext.Provider>;
}

StylesProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes.node.isRequired,
  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server-side.
   * You can significantly speed up the traversal with this property.
   */
  disableGeneration: PropTypes.bool,
  /**
   * JSS's class name generator.
   */
  generateClassName: PropTypes.func,
  /**
   * By default, the styles are injected last in the <head> element of your page.
   * They gain more specificity than any other style sheet on your page e.g. CSS modules, styled components.
   * If you want to override the Material-UI's styles, set this prop.
   */
  injectFirst: PropTypes.bool,
  /**
   * JSS's instance.
   */
  jss: PropTypes.object,
  /**
   * @ignore
   *
   * Cache the sheets
   */
  sheetsCache: PropTypes.object,
  /**
   * @ignore.
   *
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: PropTypes.object,
  /**
   * @ignore
   *
   * Collect the sheets.
   */
  sheetsRegistry: PropTypes.object,
};

if (process.env.NODE_ENV !== 'production') {
  StylesProvider.propTypes = exactProp(StylesProvider.propTypes);
}

StylesProvider.defaultProps = {
  disableGeneration: false,
  injectFirst: false,
};

export default StylesProvider;

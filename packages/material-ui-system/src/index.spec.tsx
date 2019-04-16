import { compose, css, palette, StyleFunction, spacing } from '@material-ui/system';
import * as React from 'react';
import styled from 'styled-components';

function composeTest() {
  function first(props: { color: string }) {
    return {};
  }

  function second(props: { spacing: number }) {
    return {};
  }

  const styler = compose(
    first,
    second,
  );
  // missing `spacing`
  styler({ color: 'test' }); // $ExpectError
  // missing `color`
  styler({ spacing: 1 }); // $ExpectError
  styler({ color: 'test', spacing: 1 });
}

function cssTest() {
  function styleFunction(props: { color: string; spacing: number; theme: object }) {
    return {};
  }

  const wideOrNarrowStyleFunction = css(styleFunction);

  // narrow
  wideOrNarrowStyleFunction({ theme: {}, css: { color: 'blue', spacing: 2 } });
  // wide
  wideOrNarrowStyleFunction({ theme: {}, color: 'blue', spacing: 2 });
  // wide and narrow
  wideOrNarrowStyleFunction({ theme: {}, css: { color: 'blue', spacing: 2 }, color: 'red' });
}

/**
 * Testing inference of TypeScript + styled-components + @material-ui/system
 */
function interopTest() {
  // built-in style function
  const SystemSpacingBox = styled.div`
    ${spacing}
  `;
  <SystemSpacingBox m={2} />;
}

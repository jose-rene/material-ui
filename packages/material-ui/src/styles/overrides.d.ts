import { AppBarClassKey } from '../AppBar/AppBar';
import { AvatarClassKey } from '../Avatar/Avatar';
import { BackdropClassKey } from '../Modal/Backdrop';
import { BadgeClassKey } from '../Badge/Badge';
import { BottomNavigationClassKey } from '../BottomNavigation/BottomNavigation';
import { BottomNavigationActionClassKey } from '../BottomNavigation/BottomNavigationAction';
import { ButtonClassKey } from '../Button/Button';
import { ButtonBaseClassKey } from '../ButtonBase/ButtonBase';
import { CardClassKey } from '../Card/Card';
import { CardActionsClassKey } from '../Card/CardActions';
import { CardContentClassKey } from '../Card/CardContent';
import { CardHeaderClassKey } from '../Card/CardHeader';
import { CardMediaClassKey } from '../Card/CardMedia';
import { CheckboxClassKey } from '../Checkbox/Checkbox';
import { ChipClassKey } from '../Chip/Chip';
import { CircularProgressClassKey } from '../Progress/CircularProgress';
import { CollapseClassKey } from '../transitions/Collapse';
import { CssBaselineClassKey } from '../CssBaseline/CssBaseline';
import { DialogActionsClassKey } from '../Dialog/DialogActions';
import { DialogClassKey } from '../Dialog/Dialog';
import { DialogContentClassKey } from '../Dialog/DialogContent';
import { DialogContentTextClassKey } from '../Dialog/DialogContentText';
import { DialogTitleClassKey } from '../Dialog/DialogTitle';
import { DividerClassKey } from '../Divider/Divider';
import { DrawerClassKey } from '../Drawer/Drawer';
import { ExpansionPanelActionsClassKey } from '../ExpansionPanel/ExpansionPanelActions';
import { ExpansionPanelClassKey } from '../ExpansionPanel/ExpansionPanel';
import { ExpansionPanelDetailsClassKey } from '../ExpansionPanel/ExpansionPanelDetails';
import { ExpansionPanelSummaryClassKey } from '../ExpansionPanel/ExpansionPanelSummary';
import { FormControlClassKey } from '../Form/FormControl';
import { FormControlLabelClassKey } from '../Form/FormControlLabel';
import { FormGroupClassKey } from '../Form/FormGroup';
import { FormHelperTextClassKey } from '../Form/FormHelperText';
import { FormLabelClassKey } from '../Form/FormLabel';
import { GridClassKey } from '../Grid/Grid';
import { GridListClassKey } from '../GridList/GridList';
import { GridListTileBarClassKey } from '../GridList/GridListTileBar';
import { GridListTileClassKey } from '../GridList/GridListTile';
import { IconButtonClassKey } from '../IconButton/IconButton';
import { IconClassKey } from '../Icon/Icon';
import { InputAdornmentClassKey } from '../Input/InputAdornment';
import { InputClassKey } from '../Input/Input';
import { InputLabelClassKey } from '../Input/InputLabel';
import { LinearProgressClassKey } from '../Progress/LinearProgress';
import { ListClassKey } from '../List/List';
import { ListItemAvatarClassKey } from '../List/ListItemAvatar';
import { ListItemClassKey } from '../List/ListItem';
import { ListItemIconClassKey } from '../List/ListItemIcon';
import { ListItemSecondaryActionClassKey } from '../List/ListItemSecondaryAction';
import { ListItemTextClassKey } from '../List/ListItemText';
import { ListSubheaderClassKey } from '../List/ListSubheader';
import { MenuClassKey } from '../Menu/Menu';
import { MenuItemClassKey } from '../Menu/MenuItem';
import { MenuListClassKey } from '../Menu/MenuList';
import { MobileStepperClassKey } from '../MobileStepper/MobileStepper';
import { ModalClassKey } from '../Modal/Modal';
import { PaperClassKey } from '../Paper/Paper';
import { PopoverClassKey } from '../Popover/Popover';
import { RadioClassKey } from '../Radio/Radio';
import { RadioGroupClassKey } from '../Radio/RadioGroup';
import { SelectClassKey } from '../Select/Select';
import { SelectInputClassKey } from '../Select/SelectInput';
import { SnackbarClassKey } from '../Snackbar/Snackbar';
import { SnackbarContentClassKey } from '../Snackbar/SnackbarContent';
import { StepClasskey } from '../Stepper/Step';
import { StepButtonClasskey } from '../Stepper/StepButton';
import { StepContentClasskey } from '../Stepper/StepContent';
import { StepIconClasskey } from '../Stepper/StepIcon';
import { StepLabelClasskey } from '../Stepper/StepLabel';
import { StepperClasskey } from '../Stepper/Stepper';
import { StyleRules } from './withStyles';
import { SvgIconClassKey } from '../SvgIcon/SvgIcon';
import { SwitchBaseClassKey } from '../internal/SwitchBase';
import { SwitchClassKey } from '../Switch/Switch';
import { TabClassKey } from '../Tabs/Tab';
import { TableClassKey } from '../Table/Table';
import { TableCellClassKey } from '../Table/TableCell';
import { TablePaginationClassKey } from '../Table/TablePagination';
import { TableRowClassKey } from '../Table/TableRow';
import { TableSortLabelClassKey } from '../Table/TableSortLabel';
import { TabsClassKey } from '../Tabs/Tabs';
import { ToolbarClassKey } from '../Toolbar/Toolbar';
import { TooltipClassKey } from '../Tooltip/Tooltip';
import { TouchRippleClassKey } from '../ButtonBase/TouchRipple';
import { TypographyClassKey } from '../Typography/Typography';

export type Overrides = {
  [Name in keyof ComponentNameToClassKey]?: Partial<StyleRules<ComponentNameToClassKey[Name]>>
};

type ComponentNameToClassKey = {
  MuiAppBar: AppBarClassKey;
  MuiAvatar: AvatarClassKey;
  MuiBackdrop: BackdropClassKey;
  MuiBadge: BadgeClassKey;
  MuiBottomNavigation: BottomNavigationClassKey;
  MuiBottomNavigationAction: BottomNavigationActionClassKey;
  MuiButton: ButtonClassKey;
  MuiButtonBase: ButtonBaseClassKey;
  MuiCard: CardClassKey;
  MuiCardActions: CardActionsClassKey;
  MuiCardContent: CardContentClassKey;
  MuiCardHeader: CardHeaderClassKey;
  MuiCardMedia: CardMediaClassKey;
  MuiCheckbox: CheckboxClassKey;
  MuiChip: ChipClassKey;
  MuiCircularProgress: CircularProgressClassKey;
  MuiCollapse: CollapseClassKey;
  MuiCssBaseline: CssBaselineClassKey;
  MuiDialog: DialogClassKey;
  MuiDialogActions: DialogActionsClassKey;
  MuiDialogContent: DialogContentClassKey;
  MuiDialogContentText: DialogContentTextClassKey;
  MuiDialogTitle: DialogTitleClassKey;
  MuiDivider: DividerClassKey;
  MuiDrawer: DrawerClassKey;
  MuiExpansionPanel: ExpansionPanelClassKey;
  MuiExpansionPanelActions: ExpansionPanelActionsClassKey;
  MuiExpansionPanelDetails: ExpansionPanelDetailsClassKey;
  MuiExpansionPanelSummary: ExpansionPanelSummaryClassKey;
  MuiFormControl: FormControlClassKey;
  MuiFormControlLabel: FormControlLabelClassKey;
  MuiFormGroup: FormGroupClassKey;
  MuiFormHelperText: FormHelperTextClassKey;
  MuiFormLabel: FormLabelClassKey;
  MuiGrid: GridClassKey;
  MuiGridList: GridListClassKey;
  MuiGridListTile: GridListTileClassKey;
  MuiGridListTileBar: GridListTileBarClassKey;
  MuiIcon: IconClassKey;
  MuiIconButton: IconButtonClassKey;
  MuiInput: InputClassKey;
  MuiInputAdornment: InputAdornmentClassKey;
  MuiInputLabel: InputLabelClassKey;
  MuiLinearProgress: LinearProgressClassKey;
  MuiList: ListClassKey;
  MuiListItem: ListItemClassKey;
  MuiListItemAvatar: ListItemAvatarClassKey;
  MuiListItemIcon: ListItemIconClassKey;
  MuiListItemSecondaryAction: ListItemSecondaryActionClassKey;
  MuiListItemText: ListItemTextClassKey;
  MuiListSubheader: ListSubheaderClassKey;
  MuiMenu: MenuClassKey;
  MuiMenuItem: MenuItemClassKey;
  MuiMobileStepper: MobileStepperClassKey;
  MuiModal: ModalClassKey;
  MuiPaper: PaperClassKey;
  MuiPopover: PopoverClassKey;
  MuiRadio: RadioClassKey;
  MuiSelect: SelectClassKey;
  MuiSnackbar: SnackbarClassKey;
  MuiSnackbarContent: SnackbarContentClassKey;
  MuiStep: StepClasskey;
  MuiStepButton: StepButtonClasskey;
  MuiStepContent: StepContentClasskey;
  MuiStepIcon: StepIconClasskey;
  MuiStepLabel: StepLabelClasskey;
  MuiStepper: StepperClasskey;
  MuiSvgIcon: SvgIconClassKey;
  MuiSwitchBase: SwitchBaseClassKey;
  MuiSwitch: SwitchClassKey;
  MuiTab: TabClassKey;
  MuiTable: TableClassKey;
  MuiTableCell: TableCellClassKey;
  MuiTablePagination: TablePaginationClassKey;
  MuiTableRow: TableRowClassKey;
  MuiTableSortLabel: TableSortLabelClassKey;
  MuiTabs: TabsClassKey;
  MuiToolbar: ToolbarClassKey;
  MuiTooltip: TooltipClassKey;
  MuiTouchRipple: TouchRippleClassKey;
  MuiTypography: TypographyClassKey;
};

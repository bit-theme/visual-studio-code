import { softThemePalette as palette } from '../../palette'

/* For details on each color customization go to https://code.visualstudio.com/api/references/theme-color. */

const colors = {
  /*
    Contrast colors
  */
  // 'contrastActiveBorder': '',
  // 'contrastBorder': '',

  /*
    Base colors
  */
  'focusBorder': palette.ansi.green,
  'foreground': palette.base.foreground,
  // 'widget.shadow': '',
  'selection.background': palette.additional.transparent.green,
  'descriptionForeground': palette.ansi.blue,
  'errorForeground': palette.ansi.red,
  'icon.foreground': palette.base.foreground,
  // 'sash.hoverBorder': '',

  /*
    Window border
  */
  // 'window.activeBorder': '',
  // 'window.inactiveBorder': '',

  /*
    Text colors
  */
  // 'textBlockQuote.background': '',
  // 'textBlockQuote.border': '',
  // 'textCodeBlock.background': '',
  'textLink.activeForeground': palette.ansi.cyan,
  'textLink.foreground': palette.ansi.blue,
  // 'textPreformat.foreground': '',
  // 'textSeparator.foreground': '',

  /*
    Action colors
  */
  // 'toolbar.hoverBackground': '',
  // 'toolbar.hoverOutline': '',
  // 'toolbar.activeBackground': '',

  /*
    Button control
  */
  'button.background': palette.additional.gray[600],
  'button.foreground': palette.base.foreground,
  // 'button.border': '',
  'button.hoverBackground': palette.additional.darkGreen,
  // 'button.secondaryForeground': '',
  // 'button.secondaryBackground': '',
  // 'button.secondaryHoverBackground': '',
  'checkbox.background': palette.ansi.green,
  'checkbox.foreground': palette.base.foreground,
  'checkbox.border': palette.base.foreground,

  /*
    Dropdown control
  */
  'dropdown.background': palette.ansi.black,
  'dropdown.listBackground': palette.ansi.black,
  'dropdown.border': palette.base.foreground,
  'dropdown.foreground': palette.base.foreground,

  /*
    Input control
  */
  'input.background': palette.additional.gray[800],
  'input.border': palette.additional.gray[500],
  'input.foreground': palette.base.foreground,
  'input.placeholderForeground': palette.additional.gray[100],
  // 'inputOption.activeBackground': '',
  'inputOption.activeBorder': palette.ansi.green,
  // 'inputOption.activeForeground': '',
  // 'inputOption.hoverBackground': '',
  // 'inputValidation.errorBackground': '',
  'inputValidation.errorForeground': palette.ansi.red,
  'inputValidation.errorBorder': palette.ansi.red,
  // 'inputValidation.infoBackground': '',
  'inputValidation.infoForeground': palette.ansi.magenta,
  'inputValidation.infoBorder': palette.ansi.magenta,
  // 'inputValidation.warningBackground': '',
  'inputValidation.warningForeground': palette.ansi.yellow,
  'inputValidation.warningBorder': palette.ansi.yellow,

  /*
    Scrollbar control
  */
  // 'scrollbar.shadow': '',
  // 'scrollbarSlider.activeBackground': '',
  // 'scrollbarSlider.background': '',
  // 'scrollbarSlider.hoverBackground': '',

  /*
    Badge
  */
  'badge.background': palette.additional.gray[300],
  'badge.foreground': palette.base.foreground,

  /*
    Progress bar
  */
  'progressBar.background': palette.ansi.green,

  /*
    Lists and trees
  */
  'list.activeSelectionBackground': palette.additional.gray[800],
  'list.activeSelectionForeground': palette.base.foreground,
  // 'list.activeSelectionIconForeground': '',
  'list.dropBackground': palette.additional.gray[800],
  'list.focusBackground': palette.additional.gray[800],
  // 'list.focusForeground': '',
  // 'list.focusHighlightForeground': '',
  'list.focusOutline': palette.additional.darkGreen,
  'list.highlightForeground': palette.additional.darkGreen,
  'list.hoverBackground': palette.additional.gray[700],
  // 'list.hoverForeground': '',
  'list.inactiveSelectionBackground': palette.additional.gray[800],
  // 'list.inactiveSelectionForeground': '',
  // 'list.inactiveSelectionIconForeground': '',
  // 'list.inactiveFocusBackground': '',
  // 'list.inactiveFocusOutline': '',
  'list.invalidItemForeground': palette.ansi.red,
  'list.errorForeground': palette.ansi.red,
  'list.warningForeground': palette.ansi.yellow,
  'listFilterWidget.background': palette.additional.gray[700],
  // 'listFilterWidget.outline': '',
  'listFilterWidget.noMatchesOutline': palette.ansi.red,
  'list.filterMatchBackground': palette.additional.gray[600],
  // 'list.filterMatchBorder': '',
  // 'list.deemphasizedForeground': '',
  // 'tree.indentGuidesStroke': '',
  // 'tree.tableColumnsBorder': '',
  // 'tree.tableOddRowsBackground': '',

  /*
    Activity Bar
  */
  'activityBar.background': palette.base.background,
  // 'activityBar.dropBorder': '',
  'activityBar.foreground': palette.base.foreground,
  'activityBar.inactiveForeground': palette.additional.darkGreen,
  'activityBar.border': palette.ansi.black,
  'activityBarBadge.background': palette.base.foreground,
  'activityBarBadge.foreground': palette.ansi.black,
  'activityBar.activeBorder': palette.ansi.green,
  'activityBar.activeBackground': palette.additional.gray[700],
  // 'activityBar.activeFocusBorder': '',

  /*
    Side Bar
  */
  'sideBar.background': palette.ansi.black,
  'sideBar.foreground': palette.base.foreground,
  'sideBar.border': palette.ansi.black,
  // 'sideBar.dropBackground': '',
  'sideBarTitle.foreground': palette.base.foreground,
  'sideBarSectionHeader.background': palette.base.background,
  'sideBarSectionHeader.foreground': palette.base.foreground,
  'sideBarSectionHeader.border': palette.ansi.black,

  /*
    Minimap
  */
  // 'minimap.findMatchHighlight': '',
  // 'minimap.selectionHighlight': '',
  // 'minimap.errorHighlight': '',
  // 'minimap.warningHighlight': '',
  // 'minimap.background': '',
  // 'minimap.selectionOccurrenceHighlight': '',
  // 'minimap.foregroundOpacity': '',
  // 'minimapSlider.background': '',
  // 'minimapSlider.hoverBackground': '',
  // 'minimapSlider.activeBackground': '',
  // 'minimapGutter.addedBackground': '',
  // 'minimapGutter.modifiedBackground': '',
  // 'minimapGutter.deletedBackground': '',

  /*
    Editor Groups & Tabs
  */
  'editorGroup.border': palette.additional.gray[600],
  'editorGroup.dropBackground': palette.additional.transparent.darkGreen,
  // 'editorGroupHeader.noTabsBackground': '',
  'editorGroupHeader.tabsBackground': palette.ansi.black,
  // 'editorGroupHeader.tabsBorder': '',
  // 'editorGroupHeader.border': '',
  // 'editorGroup.emptyBackground': '',
  // 'editorGroup.focusedEmptyBorder': '',
  'tab.activeBackground': palette.base.background,
  // 'tab.unfocusedActiveBackground': '',
  'tab.activeForeground': palette.base.foreground,
  'tab.border': palette.ansi.black,
  // 'tab.activeBorder': '',
  // 'tab.unfocusedActiveBorder': '',
  'tab.activeBorderTop': palette.ansi.green,
  'tab.unfocusedActiveBorderTop': palette.additional.transparent.darkGreen,
  'tab.lastPinnedBorder': palette.additional.darkGreen,
  'tab.inactiveBackground': palette.ansi.black,
  // 'tab.unfocusedInactiveBackground': '',
  'tab.inactiveForeground': palette.additional.gray[100],
  'tab.unfocusedActiveForeground': palette.additional.gray[700],
  // 'tab.unfocusedInactiveForeground': '',
  // 'tab.hoverBackground': '',
  // 'tab.unfocusedHoverBackground': '',
  // 'tab.hoverForeground': '',
  // 'tab.unfocusedHoverForeground': '',
  // 'tab.hoverBorder': '',
  // 'tab.unfocusedHoverBorder': '',
  // 'tab.activeModifiedBorder': '',
  // 'tab.inactiveModifiedBorder': '',
  // 'tab.unfocusedActiveModifiedBorder': '',
  // 'tab.unfocusedInactiveModifiedBorder': '',
  // 'editorPane.background': '',
  // 'sideBySideEditor.horizontalBorder': '',
  // 'sideBySideEditor.verticalBorder': '',

  /*
    Editor colors
  */
  'editor.background': palette.base.background,
  'editor.foreground': palette.base.foreground,
  'editorLineNumber.foreground': palette.additional.gray[400],
  'editorLineNumber.activeForeground': palette.base.foreground,
  // 'editorCursor.background': '',
  // 'editorCursor.foreground': '',
  'editor.selectionBackground': palette.additional.gray[600],
  // 'editor.selectionForeground': '',
  // 'editor.inactiveSelectionBackground': '',
  'editor.selectionHighlightBackground': palette.additional.gray[600],
  // 'editor.selectionHighlightBorder': '',
  'editor.wordHighlightBackground': palette.additional.transparent.brightGray,
  // 'editor.wordHighlightBorder': '',
  'editor.wordHighlightStrongBackground': palette.additional.transparent.green,
  // 'editor.wordHighlightStrongBorder': '',
  'editor.findMatchBackground': palette.additional.transparent.green,
  'editor.findMatchHighlightBackground': palette.additional.transparent.brightGray,
  'editor.findRangeHighlightBackground': palette.additional.transparent.darkGreen,
  // 'editor.findMatchBorder': '',
  // 'editor.findMatchHighlightBorder': '',
  // 'editor.findRangeHighlightBorder': '',
  // 'searchEditor.findMatchBackground': '',
  // 'searchEditor.findMatchBorder': '',
  // 'searchEditor.textInputBorder': '',
  'editor.hoverHighlightBackground': palette.ansi.black,
  'editor.lineHighlightBackground': palette.additional.gray[800],
  // 'editor.lineHighlightBorder': '',
  // 'editorUnicodeHighlight.border': '',
  'editorLink.activeForeground': palette.ansi.cyan,
  'editor.rangeHighlightBackground': palette.additional.transparent.green,
  // 'editor.rangeHighlightBorder': '',
  // 'editor.symbolHighlightBackground': '',
  // 'editor.symbolHighlightBorder': '',
  'editorWhitespace.foreground': palette.additional.gray[400],
  'editorIndentGuide.background': palette.additional.gray[700],
  'editorIndentGuide.activeBackground': palette.additional.gray[500],
  // 'editorInlayHint.background': '',
  // 'editorInlayHint.foreground': '',
  // 'editorInlayHint.typeForeground': '',
  // 'editorInlayHint.typeBackground': '',
  // 'editorInlayHint.parameterForeground': '',
  // 'editorInlayHint.parameterBackground': '',
  'editorRuler.foreground': palette.additional.transparent.gray,
  // 'editor.linkedEditingBackground': '',
  'editorCodeLens.foreground': palette.additional.gray[400],
  'editorLightBulb.foreground': palette.ansi.brightYellow,
  // 'editorLightBulbAutoFix.foreground': '',
  'editorBracketMatch.background': palette.ansi.black,
  'editorBracketMatch.border': palette.base.foreground,
  'editorBracketHighlight.foreground1': palette.ansi.brightYellow,
  'editorBracketHighlight.foreground2': palette.ansi.red,
  'editorBracketHighlight.foreground3': palette.ansi.blue,
  'editorBracketHighlight.foreground4': palette.ansi.green,
  'editorBracketHighlight.foreground5': palette.ansi.cyan,
  'editorBracketHighlight.foreground6': palette.ansi.magenta,
  'editorBracketHighlight.unexpectedBracket.foreground': palette.ansi.brightRed,
  // 'editorBracketPairGuide.activeBackground1': '',
  // 'editorBracketPairGuide.activeBackground2': '',
  // 'editorBracketPairGuide.activeBackground3': '',
  // 'editorBracketPairGuide.activeBackground4': '',
  // 'editorBracketPairGuide.activeBackground5': '',
  // 'editorBracketPairGuide.activeBackground6': '',
  // 'editorBracketPairGuide.background1': '',
  // 'editorBracketPairGuide.background2': '',
  // 'editorBracketPairGuide.background3': '',
  // 'editorBracketPairGuide.background4': '',
  // 'editorBracketPairGuide.background5': '',
  // 'editorBracketPairGuide.background6': '',
  'editor.foldBackground': palette.ansi.black,
  // 'editorOverviewRuler.background': '',
  'editorOverviewRuler.border': palette.ansi.black,
  // 'editorOverviewRuler.findMatchForeground': '',
  // 'editorOverviewRuler.rangeHighlightForeground': '',
  'editorOverviewRuler.selectionHighlightForeground': palette.additional.transparent.white,
  'editorOverviewRuler.wordHighlightForeground': palette.additional.transparent.white,
  'editorOverviewRuler.wordHighlightStrongForeground': palette.additional.transparent.green,
  'editorOverviewRuler.modifiedForeground': palette.additional.transparent.cyan,
  'editorOverviewRuler.addedForeground': palette.additional.transparent.brightGreen,
  'editorOverviewRuler.deletedForeground': palette.additional.transparent.red,
  'editorOverviewRuler.errorForeground': palette.additional.transparent.red,
  'editorOverviewRuler.warningForeground': palette.additional.transparent.yellow,
  'editorOverviewRuler.infoForeground': palette.additional.transparent.blue,
  // 'editorOverviewRuler.bracketMatchForeground': '',
  'editorError.foreground': palette.ansi.red,
  // 'editorError.border': '',
  // 'editorError.background': '',
  'editorWarning.foreground': palette.ansi.yellow,
  // 'editorWarning.border': '',
  // 'editorWarning.background': '',
  'editorInfo.foreground': palette.ansi.blue,
  // 'editorInfo.border': '',
  // 'editorInfo.background': '',
  'editorHint.foreground': palette.ansi.brightYellow,
  // 'editorHint.border': '',
  'problemsErrorIcon.foreground': palette.ansi.red,
  'problemsWarningIcon.foreground': palette.ansi.yellow,
  'problemsInfoIcon.foreground': palette.ansi.blue,
  // 'editorUnnecessaryCode.border': '',
  'editorUnnecessaryCode.opacity': palette.additional.transparent.black,
  'editorGutter.background': palette.base.background,
  'editorGutter.modifiedBackground': palette.ansi.cyan,
  'editorGutter.addedBackground': palette.ansi.brightGreen,
  'editorGutter.deletedBackground': palette.ansi.red,
  // 'editorGutter.commentRangeForeground': '',
  'editorGutter.foldingControlForeground': palette.base.foreground,

  /*
    Diff editor colors
  */
  'diffEditor.insertedTextBackground': palette.additional.transparent.brightGreen,
  // 'diffEditor.insertedTextBorder': '',
  'diffEditor.removedTextBackground': palette.additional.transparent.red,
  // 'diffEditor.removedTextBorder': '',
  // 'diffEditor.border': '',
  // 'diffEditor.diagonalFill': '',
  // 'diffEditor.insertedLineBackground': '',
  // 'diffEditor.removedLineBackground': '',
  // 'diffEditorGutter.insertedLineBackground': '',
  // 'diffEditorGutter.removedLineBackground': '',
  // 'diffEditorOverview.insertedForeground': '',
  // 'diffEditorOverview.removedForeground': '',

  /*
    Editor widget colors
  */
  'editorWidget.background': palette.ansi.black,
  'editorWidget.foreground': palette.base.foreground,
  'editorWidget.border': palette.ansi.green,
  'editorWidget.resizeBorder': palette.ansi.green,
  'editorSuggestWidget.background': palette.ansi.black,
  'editorSuggestWidget.border': palette.additional.gray[600],
  'editorSuggestWidget.foreground': palette.base.foreground,
  'editorSuggestWidget.focusHighlightForeground': palette.ansi.green,
  'editorSuggestWidget.highlightForeground': palette.ansi.blue,
  'editorSuggestWidget.selectedBackground': palette.additional.gray[600],
  'editorSuggestWidget.selectedForeground': palette.base.foreground,
  'editorSuggestWidget.selectedIconForeground': palette.base.foreground,
  // 'editorSuggestWidgetStatus.foreground': '',
  // 'editorHoverWidget.foreground': palette.base.foreground,
  'editorHoverWidget.background': palette.ansi.black,
  'editorHoverWidget.border': palette.additional.darkGreen,
  // 'editorHoverWidget.highlightForeground': '',
  // 'editorHoverWidget.statusBarBackground': '',
  // 'editorGhostText.border': '',
  // 'editorGhostText.background': '',
  'editorGhostText.foreground': palette.additional.gray[600],
  'debugExceptionWidget.background': palette.ansi.black,
  'debugExceptionWidget.border': palette.additional.darkGreen,
  'editorMarkerNavigation.background': palette.ansi.black,
  'editorMarkerNavigationError.background': palette.ansi.red,
  'editorMarkerNavigationWarning.background': palette.ansi.brightYellow,
  'editorMarkerNavigationInfo.background': palette.ansi.blue,
  'editorMarkerNavigationError.headerBackground': palette.additional.transparent.red,
  'editorMarkerNavigationWarning.headerBackground': palette.additional.transparent.yellow,
  'editorMarkerNavigationInfo.headerBackground': palette.additional.transparent.blue,

  /*
    Peek view colors
  */
  'peekView.border': palette.additional.darkGreen,
  'peekViewEditor.background': palette.ansi.black,
  // 'peekViewEditorGutter.background': '',
  'peekViewEditor.matchHighlightBackground': palette.additional.transparent.green,
  // 'peekViewEditor.matchHighlightBorder': '',
  'peekViewResult.background': palette.additional.gray[800],
  'peekViewResult.fileForeground': palette.base.foreground,
  'peekViewResult.lineForeground': palette.additional.gray[50],
  'peekViewResult.matchHighlightBackground': palette.additional.transparent.green,
  'peekViewResult.selectionBackground': palette.additional.gray[500],
  'peekViewResult.selectionForeground': palette.base.foreground,
  'peekViewTitle.background': palette.additional.gray[800],
  'peekViewTitleDescription.foreground': palette.additional.gray[200],
  'peekViewTitleLabel.foreground': palette.base.foreground,

  /*
    Merge conflicts colors
  */
  'merge.currentHeaderBackground': palette.additional.transparent.green,
  'merge.currentContentBackground': palette.additional.transparent.darkGreen,
  'merge.incomingHeaderBackground': palette.additional.transparent.brightCyan,
  'merge.incomingContentBackground': palette.additional.transparent.cyan,
  // 'merge.border': '',
  'merge.commonContentBackground': palette.additional.transparent.blue,
  'merge.commonHeaderBackground': palette.additional.transparent.brightBlue,
  'editorOverviewRuler.currentContentForeground': palette.base.foreground,
  'editorOverviewRuler.incomingContentForeground': palette.base.foreground,
  'editorOverviewRuler.commonContentForeground': palette.base.foreground,

  /*
    Panel colors
  */
  'panel.background': palette.base.background,
  'panel.border': palette.ansi.green,
  // 'panel.dropBorder': '',
  'panelTitle.activeBorder': palette.ansi.green,
  'panelTitle.activeForeground': palette.base.foreground,
  'panelTitle.inactiveForeground': palette.additional.gray[100],
  // 'panelInput.border': '',
  // 'panelSection.border': '',
  // 'panelSection.dropBackground': '',
  // 'panelSectionHeader.background': '',
  // 'panelSectionHeader.foreground': '',
  // 'panelSectionHeader.border': '',

  /*
    Status Bar colors
  */
  'statusBar.background': palette.ansi.black,
  'statusBar.foreground': palette.base.foreground,
  'statusBar.debuggingBackground': palette.ansi.red,
  'statusBar.debuggingForeground': palette.ansi.black,
  'statusBar.debuggingBorder': palette.ansi.red,
  'statusBar.noFolderForeground': palette.base.foreground,
  'statusBar.noFolderBackground': palette.ansi.black,
  'statusBar.noFolderBorder': palette.ansi.black,
  // 'statusBarItem.activeBackground': '',
  'statusBarItem.hoverBackground': palette.additional.transparent.brightGray,
  'statusBarItem.prominentForeground': palette.ansi.black,
  'statusBarItem.prominentBackground': palette.ansi.green,
  'statusBarItem.prominentHoverBackground': palette.additional.transparent.brightGray,
  'statusBarItem.remoteBackground': palette.ansi.cyan,
  'statusBarItem.remoteForeground': palette.ansi.black,
  'statusBarItem.errorBackground': palette.ansi.brightRed,
  'statusBarItem.errorForeground': palette.ansi.black,
  'statusBarItem.warningBackground': palette.ansi.brightYellow,
  'statusBarItem.warningForeground': palette.ansi.black,
  // 'statusBarItem.compactHoverBackground': '',
  // 'statusBarItem.focusBorder': '',
  // 'statusBar.focusBorder': '',

  /*
    Title Bar colors
  */
  'titleBar.activeBackground': palette.base.background,
  'titleBar.activeForeground': palette.base.foreground,
  'titleBar.inactiveBackground': palette.base.background,
  'titleBar.inactiveForeground': palette.base.foreground,
  // 'titleBar.border': '',

  /*
    Menu Bar colors
  */
  'menubar.selectionForeground': palette.base.background,
  'menubar.selectionBackground': palette.base.foreground,
  // 'menubar.selectionBorder': '',
  // 'menu.foreground': '',
  // 'menu.background': '',
  // 'menu.selectionForeground': '',
  // 'menu.selectionBackground': '',
  // 'menu.selectionBorder': '',
  // 'menu.separatorBackground': '',
  // 'menu.border': '',

  /*
    Notification colors
  */
  'notificationCenter.border': palette.additional.darkGreen,
  'notificationCenterHeader.foreground': palette.base.foreground,
  'notificationCenterHeader.background': palette.ansi.black,
  'notificationToast.border': palette.additional.darkGreen,
  'notifications.foreground': palette.base.foreground,
  'notifications.background': palette.ansi.black,
  'notifications.border': palette.additional.darkGreen,
  'notificationLink.foreground': palette.ansi.blue,
  'notificationsErrorIcon.foreground': palette.ansi.red,
  'notificationsWarningIcon.foreground': palette.ansi.brightYellow,
  'notificationsInfoIcon.foreground': palette.ansi.blue,

  /*
    Banner colors
  */
  // 'banner.background': '',
  // 'banner.foreground': '',
  // 'banner.iconForeground': '',

  /*
    Extensions colors
  */
  'extensionButton.prominentForeground': palette.ansi.black,
  'extensionButton.prominentBackground': palette.ansi.green,
  'extensionButton.prominentHoverBackground': palette.ansi.green,
  // 'extensionBadge.remoteBackground': '',
  // 'extensionBadge.remoteForeground': '',
  'extensionIcon.starForeground': palette.additional.orange,
  'extensionIcon.verifiedForeground': palette.ansi.cyan,
  'extensionIcon.preReleaseForeground': palette.ansi.black,

  /*
    Quick picker colors
  */
  'pickerGroup.border': palette.ansi.green,
  'pickerGroup.foreground': palette.base.foreground,
  'quickInput.background': palette.ansi.black,
  'quickInput.foreground': palette.base.foreground,
  'quickInputList.focusBackground': palette.additional.gray[700],
  'quickInputList.focusForeground': palette.base.foreground,
  // 'quickInputList.focusIconForeground': '',
  // 'quickInputTitle.background': '',

  /*
    Keybinding label colors
  */
  'keybindingLabel.background': palette.additional.gray[700],
  'keybindingLabel.foreground': palette.additional.gray[50],
  'keybindingLabel.border': palette.additional.gray[800],
  'keybindingLabel.bottomBorder': palette.additional.gray[500],

  /*
    Keyboard shortcut table colors
  */
  'keybindingTable.headerBackground': palette.additional.gray[600],
  'keybindingTable.rowsBackground': palette.additional.gray[800],

  /*
    Integrated Terminal colors
  */
  'terminal.background': palette.base.background,
  // 'terminal.border': '',
  'terminal.foreground': palette.base.foreground,
  'terminal.ansiBlack': palette.ansi.black,
  'terminal.ansiBlue': palette.ansi.blue,
  'terminal.ansiBrightBlack': palette.ansi.brightBlack,
  'terminal.ansiBrightBlue': palette.ansi.brightBlue,
  'terminal.ansiBrightCyan': palette.ansi.brightCyan,
  'terminal.ansiBrightGreen': palette.ansi.brightGreen,
  'terminal.ansiBrightMagenta': palette.ansi.brightMagenta,
  'terminal.ansiBrightRed': palette.ansi.brightRed,
  'terminal.ansiBrightWhite': palette.ansi.brightWhite,
  'terminal.ansiBrightYellow': palette.ansi.brightYellow,
  'terminal.ansiCyan': palette.ansi.cyan,
  'terminal.ansiGreen': palette.ansi.green,
  'terminal.ansiMagenta': palette.ansi.magenta,
  'terminal.ansiRed': palette.ansi.red,
  'terminal.ansiWhite': palette.ansi.white,
  'terminal.ansiYellow': palette.ansi.yellow,
  'terminal.selectionBackground': palette.additional.gray[600],
  'terminalCursor.background': palette.base.background,
  'terminalCursor.foreground': palette.base.foreground,
  // 'terminal.dropBackground': '',
  // 'terminal.tab.activeBorder': '',
  // 'terminalCommandDecoration.defaultBackground': '',
  // 'terminalCommandDecoration.successBackground': '',
  // 'terminalCommandDecoration.errorBackground': '',

  /*
    Debug colors
  */
  'debugToolBar.background': palette.ansi.black,
  'debugToolBar.border': palette.ansi.black,
  // 'editor.stackFrameHighlightBackground': '',
  // 'editor.focusedStackFrameHighlightBackground': '',
  // 'editor.inlineValuesForeground': '',
  // 'editor.inlineValuesBackground': '',
  // 'debugView.exceptionLabelForeground': '',
  // 'debugView.exceptionLabelBackground': '',
  // 'debugView.stateLabelForeground': '',
  // 'debugView.stateLabelBackground': '',
  // 'debugView.valueChangedHighlight': '',
  // 'debugTokenExpression.name': '',
  // 'debugTokenExpression.value': '',
  // 'debugTokenExpression.string': '',
  // 'debugTokenExpression.boolean': '',
  // 'debugTokenExpression.number': '',
  // 'debugTokenExpression.error': '',

  /*
    Testing colors
  */
  // 'testing.iconFailed': '',
  // 'testing.iconErrored': '',
  // 'testing.iconPassed': '',
  // 'testing.runAction': '',
  // 'testing.iconQueued': '',
  // 'testing.iconUnset': '',
  // 'testing.iconSkipped': '',
  // 'testing.peekBorder': '',
  // 'testing.peekHeaderBackground': '',
  // 'testing.message.error.decorationForeground': '',
  // 'testing.message.error.lineBackground': '',
  // 'testing.message.info.decorationForeground': '',
  // 'testing.message.info.lineBackground': '',

  /*
    Welcome page colors
  */
  // 'welcomePage.background': '',
  // 'welcomePage.progress.background': '',
  // 'welcomePage.progress.foreground': '',
  // 'welcomePage.tileBackground': '',
  // 'welcomePage.tileHoverBackground': '',
  // 'welcomePage.tileShadow': '',
  'walkThrough.embeddedEditorBackground': palette.ansi.black,

  /*
    Source Control colors
  */
  // 'scm.providerBorder': '',

  /*
    Git colors
  */
  // 'gitDecoration.addedResourceForeground': '',
  'gitDecoration.modifiedResourceForeground': palette.ansi.cyan,
  'gitDecoration.deletedResourceForeground': palette.ansi.red,
  // 'gitDecoration.renamedResourceForeground': '',
  // 'gitDecoration.stageModifiedResourceForeground': '',
  // 'gitDecoration.stageDeletedResourceForeground': '',
  'gitDecoration.untrackedResourceForeground': palette.ansi.brightGreen,
  'gitDecoration.ignoredResourceForeground': palette.additional.gray[300],
  'gitDecoration.conflictingResourceForeground': palette.additional.orange,
  // 'gitDecoration.submoduleResourceForeground': '',

  /*
    Settings Editor colors
  */
  'settings.headerForeground': palette.base.foreground,
  'settings.modifiedItemIndicator': palette.ansi.cyan,
  'settings.dropdownBackground': palette.ansi.black,
  'settings.dropdownForeground': palette.base.foreground,
  'settings.dropdownBorder': palette.additional.darkGreen,
  // 'settings.dropdownListBorder': '',
  'settings.checkboxBackground': palette.ansi.black,
  'settings.checkboxForeground': palette.base.foreground,
  'settings.checkboxBorder': palette.ansi.green,
  'settings.rowHoverBackground': palette.ansi.black,
  'settings.textInputBackground': palette.ansi.black,
  'settings.textInputForeground': palette.base.foreground,
  'settings.textInputBorder': palette.ansi.green,
  'settings.numberInputBackground': palette.ansi.black,
  'settings.numberInputForeground': palette.base.foreground,
  'settings.numberInputBorder': palette.ansi.green,
  // 'settings.focusedRowBackground': '',
  // 'settings.focusedRowBorder': '',
  // 'settings.headerBorder': '',
  // 'settings.sashBorder': '',

  /*
    Breadcrumbs colors
  */
  'breadcrumb.foreground': palette.additional.gray[400],
  'breadcrumb.background': palette.base.background,
  'breadcrumb.focusForeground': palette.base.foreground,
  'breadcrumb.activeSelectionForeground': palette.base.foreground,
  'breadcrumbPicker.background': palette.ansi.black,

  /*
    Snippets colors
  */
  'editor.snippetTabstopHighlightBackground': palette.ansi.black,
  'editor.snippetTabstopHighlightBorder': palette.additional.darkGreen,
  'editor.snippetFinalTabstopHighlightBackground': palette.ansi.black,
  'editor.snippetFinalTabstopHighlightBorder': palette.ansi.brightGreen,

  /*
    Symbol Icons colors
  */
  'symbolIcon.arrayForeground': palette.base.foreground,
  'symbolIcon.booleanForeground': palette.base.foreground,
  'symbolIcon.classForeground': palette.ansi.cyan,
  'symbolIcon.colorForeground': palette.base.foreground,
  'symbolIcon.constantForeground': palette.base.foreground,
  'symbolIcon.constructorForeground': palette.ansi.magenta,
  'symbolIcon.enumeratorForeground': palette.ansi.cyan,
  'symbolIcon.enumeratorMemberForeground': palette.ansi.blue,
  'symbolIcon.eventForeground': palette.ansi.cyan,
  'symbolIcon.fieldForeground': palette.ansi.blue,
  'symbolIcon.fileForeground': palette.base.foreground,
  'symbolIcon.folderForeground': palette.base.foreground,
  'symbolIcon.functionForeground': palette.ansi.magenta,
  'symbolIcon.interfaceForeground': palette.ansi.blue,
  'symbolIcon.keyForeground': palette.base.foreground,
  'symbolIcon.keywordForeground': palette.base.foreground,
  'symbolIcon.methodForeground': palette.ansi.magenta,
  'symbolIcon.moduleForeground': palette.base.foreground,
  'symbolIcon.namespaceForeground': palette.base.foreground,
  'symbolIcon.nullForeground': palette.base.foreground,
  'symbolIcon.numberForeground': palette.base.foreground,
  'symbolIcon.objectForeground': palette.base.foreground,
  'symbolIcon.operatorForeground': palette.base.foreground,
  'symbolIcon.packageForeground': palette.base.foreground,
  'symbolIcon.propertyForeground': palette.base.foreground,
  'symbolIcon.referenceForeground': palette.base.foreground,
  'symbolIcon.snippetForeground': palette.base.foreground,
  'symbolIcon.stringForeground': palette.base.foreground,
  'symbolIcon.structForeground': palette.base.foreground,
  'symbolIcon.textForeground': palette.base.foreground,
  'symbolIcon.typeParameterForeground': palette.base.foreground,
  'symbolIcon.unitForeground': palette.base.foreground,
  'symbolIcon.variableForeground': palette.ansi.blue,

  /*
    Debug Icons colors
  */
  'debugIcon.breakpointForeground': palette.base.foreground,
  'debugIcon.breakpointDisabledForeground': palette.additional.gray[600],
  'debugIcon.breakpointUnverifiedForeground': palette.additional.gray[100],
  'debugIcon.breakpointCurrentStackframeForeground': palette.base.foreground,
  'debugIcon.breakpointStackframeForeground': palette.additional.transparent.white,
  'debugIcon.startForeground': palette.ansi.green,
  'debugIcon.pauseForeground': palette.ansi.cyan,
  'debugIcon.stopForeground': palette.ansi.red,
  'debugIcon.disconnectForeground': palette.ansi.red,
  'debugIcon.restartForeground': palette.ansi.green,
  'debugIcon.stepOverForeground': palette.base.foreground,
  'debugIcon.stepIntoForeground': palette.base.foreground,
  'debugIcon.stepOutForeground': palette.base.foreground,
  'debugIcon.continueForeground': palette.ansi.cyan,
  'debugIcon.stepBackForeground': palette.base.foreground,
  'debugConsole.infoForeground': palette.ansi.blue,
  'debugConsole.warningForeground': palette.ansi.brightYellow,
  'debugConsole.errorForeground': palette.ansi.red,
  'debugConsole.sourceForeground': palette.ansi.blue,
  'debugConsoleInputIcon.foreground': palette.base.foreground,

  /*
    Notebook colors
  */
  // 'notebook.cellBorderColor': '',
  // 'notebook.cellHoverBackground': '',
  // 'notebook.cellInsertionIndicator': '',
  // 'notebook.cellStatusBarItemHoverBackground': '',
  // 'notebook.cellToolbarSeparator': '',
  // 'notebook.cellEditorBackground': '',
  // 'notebook.focusedCellBackground': '',
  // 'notebook.focusedCellBorder': '',
  // 'notebook.focusedEditorBorder': '',
  // 'notebook.inactiveFocusedCellBorder': '',
  // 'notebook.inactiveSelectedCellBorder': '',
  // 'notebook.outputContainerBackgroundColor': '',
  // 'notebook.outputContainerBorderColor': '',
  // 'notebook.selectedCellBackground': '',
  // 'notebook.selectedCellBorder': '',
  // 'notebook.symbolHighlightBackground': '',
  // 'notebookScrollbarSlider.activeBackground': '',
  // 'notebookScrollbarSlider.background': '',
  // 'notebookScrollbarSlider.hoverBackground': '',
  // 'notebookStatusErrorIcon.foreground': '',
  // 'notebookStatusRunningIcon.foreground': '',
  // 'notebookStatusSuccessIcon.foreground': '',

  /*
    Chart colors
  */
  // 'charts.foreground': '',
  // 'charts.lines': '',
  // 'charts.red': '',
  // 'charts.blue': '',
  // 'charts.yellow': '',
  // 'charts.orange': '',
  // 'charts.green': '',
  // 'charts.purple': '',

  /*
    Ports Colors
  */
  // 'ports.iconRunningProcessForeground': '',
}

export { colors }

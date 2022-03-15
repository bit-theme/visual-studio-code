import { intenseThemePalette as palette } from '../../palette'

const tokenColors = [
  /*
    General
  */
  {
    'scope': [
      'emphasis',
    ],
    'settings': {
      'fontStyle': 'italic',
    },
  },
  {
    'scope': [
      'strong',
    ],
    'settings': {
      'fontStyle': 'bold',
    },
  },
  {
    'scope': [
      'header',
    ],
    'settings': {
      'foreground': palette.ansi.blue,
    },
  },
  {
    'scope': [
      'source',
    ],
    'settings': {
      'foreground': palette.base.foreground,
    },
  },

  /*
    Diffs
  */
  {
    'scope': [
      'meta.diff',
      'meta.diff.header',
    ],
    'settings': {
      'foreground': palette.additional.gray[400],
    },
  },
  {
    'scope': [
      'markup.inserted',
    ],
    'settings': {
      'foreground': palette.ansi.brightGreen,
    },
  },
  {
    'scope': [
      'markup.deleted',
    ],
    'settings': {
      'foreground': palette.ansi.red,
    },
  },
  {
    'scope': [
      'markup.changed',
    ],
    'settings': {
      'foreground': palette.ansi.cyan,
    },
  },
  {
    'scope': [
      'invalid',
      'invalid.illegal',
    ],
    'settings': {
      'foreground': palette.ansi.brightRed,
      'fontStyle': 'underline italic',
    },
  },
  {
    'scope': [
      'invalid.deprecated',
    ],
    'settings': {
      'foreground': palette.base.foreground,
      'fontStyle': 'underline italic',
    },
  },
  {
    'scope': [
      'entity.name.filename',
    ],
    'settings': {
      'foreground': palette.ansi.yellow,
    },
  },
  {
    'scope': [
      'markup.error',
    ],
    'settings': {
      'foreground': palette.ansi.red,
    },
  },

  /*
    Markdown / RST / Prose
  */
  {
    'name': 'Underlined markup',
    'scope': [
      'markup.underline',
    ],
    'settings': {
      'fontStyle': 'underline',
    },
  },
  {
    'name': 'Bold markup',
    'scope': [
      'markup.bold',
    ],
    'settings': {
      'fontStyle': 'bold',
      'foreground': palette.additional.orange,
    },
  },
  {
    'name': 'Markup headings',
    'scope': [
      'markup.heading',
    ],
    'settings': {
      'fontStyle': 'bold',
      'foreground': palette.ansi.green,
    },
  },
  {
    'name': 'Markup italic',
    'scope': [
      'markup.italic',
    ],
    'settings': {
      'foreground': palette.ansi.yellow,
      'fontStyle': 'italic',
    },
  },
  {
    'name': 'Bullets, lists (prose)',
    'scope': [
      'beginning.punctuation.definition.list.markdown',
      'beginning.punctuation.definition.quote.markdown',
      'punctuation.definition.link.restructuredtext',
    ],
    'settings': {
      'foreground': palette.additional.purple,
    },
  },
  {
    'name': 'Inline code (prose)',
    'scope': [
      'markup.inline.raw',
      'markup.raw.restructuredtext',
    ],
    'settings': {
      'foreground': palette.ansi.brightGreen,
    },
  },
  {
    'name': 'Links (prose)',
    'scope': [
      'markup.underline.link',
      'markup.underline.link.image',
    ],
    'settings': {
      'foreground': palette.ansi.blue,
    },
  },
  {
    'name': 'Link text, image alt text (prose)',
    'scope': [
      'meta.link.reference.def.restructuredtext',
      'punctuation.definition.directive.restructuredtext',
      'string.other.link.description',
      'string.other.link.title',
    ],
    'settings': {
      'foreground': palette.ansi.magenta,
    },
  },
  {
    'name': 'Blockquotes (prose)',
    'scope': [
      'entity.name.directive.restructuredtext',
      'markup.quote',
    ],
    'settings': {
      'foreground': palette.ansi.yellow,
      'fontStyle': 'italic',
    },
  },
  {
    'name': 'Horizontal rule (prose)',
    'scope': [
      'meta.separator.markdown',
    ],
    'settings': {
      'foreground': palette.additional.gray[400],
    },
  },
  {
    'name': 'Code blocks',
    'scope': [
      'fenced_code.block.language',
      'markup.raw.inner.restructuredtext',
      'markup.fenced_code.block.markdown punctuation.definition.markdown',
    ],
    'settings': {
      'foreground': palette.ansi.brightGreen,
    },
  },
  {
    'name': 'Prose constants',
    'scope': [
      'punctuation.definition.constant.restructuredtext',
    ],
    'settings': {
      'foreground': palette.ansi.blue,
    },
  },
  {
    'name': 'Braces in markdown headings',
    'scope': [
      'markup.heading.markdown punctuation.definition.string.begin',
      'markup.heading.markdown punctuation.definition.string.end',
    ],
    'settings': {
      'foreground': palette.ansi.blue,
    },
  },
  {
    'name': 'Braces in markdown paragraphs',
    'scope': [
      'meta.paragraph.markdown punctuation.definition.string.begin',
      'meta.paragraph.markdown punctuation.definition.string.end',
    ],
    'settings': {
      'foreground': palette.base.foreground,
    },
  },
  {
    'name': 'Braces in markdown blockquotes',
    'scope': [
      'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin',
      'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end',
    ],
    'settings': {
      'foreground': palette.additional.purple,
    },
  },

  /*
    Classes
  */
  {
    'name': 'User-defined class names',
    'scope': [
      'entity.name.type.class',
      'entity.name.class',
    ],
    'settings': {
      'foreground': palette.ansi.cyan,
      'fontStyle': 'normal',
    },
  },
  {
    'name': 'this, super, self, etc.',
    'scope': [
      'keyword.expressions-and-types.swift',
      'keyword.other.this',
      'variable.language',
      'variable.language punctuation.definition.variable.php',
      'variable.other.readwrite.instance.ruby',
      'variable.parameter.function.language.special',
    ],
    'settings': {
      'foreground': palette.ansi.blue,
      'fontStyle': 'italic',
    },
  },
  {
    'name': 'Inherited classes',
    'scope': [
      'entity.other.inherited-class',
    ],
    'settings': {
      'fontStyle': 'italic',
      'foreground': palette.ansi.cyan,
    },
  },

  /*
    Comments
  */
  {
    'name': 'Comments',
    'scope': [
      'comment',
      'punctuation.definition.comment',
      'unused.comment',
      'wildcard.comment',
    ],
    'settings': {
      'foreground': palette.additional.gray[400],
    },
  },
  {
    'name': 'JSDoc-style keywords',
    'scope': [
      'comment keyword.codetag.notation',
      'comment.block.documentation keyword',
      'comment.block.documentation storage.type.class',
    ],
    'settings': {
      'foreground': palette.ansi.magenta,
    },
  },
  {
    'name': 'JSDoc-style types',
    'scope': [
      'comment.block.documentation entity.name.type',
    ],
    'settings': {
      'foreground': palette.ansi.cyan,
      'fontStyle': 'italic',
    },
  },
  {
    'name': 'JSDoc-style type brackets',
    'scope': [
      'comment.block.documentation entity.name.type punctuation.definition.bracket',
    ],
    'settings': {
      'foreground': palette.ansi.cyan,
    },
  },
  {
    'name': 'JSDoc-style comment parameters',
    'scope': [
      'comment.block.documentation variable',
    ],
    'settings': {
      'foreground': palette.additional.orange,
      'fontStyle': 'italic',
    },
  },

  /*
    Constants
  */
  {
    'name': 'Constants',
    'scope': [
      'constant',
      'variable.other.constant',
    ],
    'settings': {
      'foreground': palette.ansi.blue,
    },
  },
  {
    'name': 'Constant escape sequences',
    'scope': [
      'constant.character.escape',
      'constant.character.string.escape',
      'constant.regexp',
    ],
    'settings': {
      'foreground': palette.ansi.magenta,
    },
  },

  /*
    Entities
  */
  {
    'name': 'HTML tags',
    'scope': [
      'entity.name.tag',
    ],
    'settings': {
      'foreground': palette.ansi.magenta,
    },
  },
  {
    'name': 'CSS attribute parent selectors (\'&\')',
    'scope': [
      'entity.other.attribute-name.parent-selector',
    ],
    'settings': {
      'foreground': palette.ansi.magenta,
    },
  },
  {
    'name': 'CSS ID',
    'scope': [
      'entity.other.attribute-name.id',
    ],
    'settings': {
      'foreground': palette.ansi.cyan,
      'fontStyle': 'italic',
    },
  },
  {
    'name': 'CSS property name',
    'scope': [
      'support.type.property-name.css',
      'meta.property-name.scss',
      'meta.property-list.scss',
      'source.css.scss',
    ],
    'settings': {
      'foreground': palette.additional.purple,
    },
  },
  {
    'name': 'HTML/CSS attribute names',
    'scope': [
      'entity.other.attribute-name',
    ],
    'settings': {
      'foreground': palette.ansi.green,
      'fontStyle': 'italic',
    },
  },
  {
    'name': 'Tag inline source',
    'scope': [
      'meta.tag.inline source',
    ],
    'settings': {
      'foreground': palette.ansi.yellow,
    },
  },

  /*
    Functions / Methods
  */
  {
    'name': 'Function names',
    'scope': [
      'entity.name.function',
      'meta.function-call.generic',
      'meta.function-call.object',
      'meta.function-call.php',
      'meta.function-call.static',
      'meta.method-call.java meta.method',
      'meta.method.groovy',
      'support.function.any-method.lua',
      'keyword.operator.function.infix',
    ],
    'settings': {
      'foreground': palette.ansi.green,
    },
  },
  {
    'name': 'Function parameters',
    'scope': [
      'entity.name.variable.parameter',
      'meta.at-rule.function variable',
      'meta.at-rule.mixin variable',
      'meta.function.arguments variable.other.php',
      'meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql',
      'variable.parameter',
    ],
    'settings': {
      'fontStyle': 'italic',
      'foreground': palette.additional.orange,
    },
  },
  {
    'name': 'Decorators',
    'scope': [
      'meta.decorator variable.other.readwrite',
      'meta.decorator variable.other.property',
    ],
    'settings': {
      'foreground': palette.ansi.green,
      'fontStyle': 'italic',
    },
  },
  {
    'name': 'Decorator Objects',
    'scope': [
      'meta.decorator variable.other.object',
    ],
    'settings': {
      'foreground': palette.ansi.green,
    },
  },

  /*
    Keywords
  */
  {
    'name': 'Keywords',
    'scope': [
      'keyword',
      'punctuation.definition.keyword',
    ],
    'settings': {
      'foreground': palette.ansi.magenta,
    },
  },
  {
    'name': 'Keyword "new"',
    'scope': [
      'keyword.control.new',
      'keyword.operator.new',
    ],
    'settings': {
      'fontStyle': 'bold',
    },
  },
  {
    'name': 'Generic selectors (CSS/SCSS/Less/Stylus)',
    'scope': [
      'meta.selector',
    ],
    'settings': {
      'foreground': palette.ansi.magenta,
    },
  },

  /*
    Language Built-ins
  */
  {
    'name': 'Language Built-ins',
    'scope': [
      'support',
    ],
    'settings': {
      'fontStyle': 'italic',
      'foreground': palette.ansi.cyan,
    },
  },
  {
    'name': 'Built-in magic functions and constants',
    'scope': [
      'support.function.magic',
      'support.variable',
      'variable.other.predefined',
    ],
    'settings': {
      'fontStyle': 'regular',
      'foreground': palette.ansi.blue,
    },
  },
  {
    'name': 'Built-in functions / properties',
    'scope': [
      'support.function',
      'support.type.property-name',
    ],
    'settings': {
      'fontStyle': 'regular',
    },
  },

  /*
    Punctuations
  */
  {
    'name': 'Separators (key/value, namespace, inheritance, pointer, hash, slice, etc)',
    'scope': [
      'constant.other.symbol.hashkey punctuation.definition.constant.ruby',
      'entity.other.attribute-name.placeholder punctuation',
      'entity.other.attribute-name.pseudo-class punctuation',
      'entity.other.attribute-name.pseudo-element punctuation',
      'meta.group.double.toml',
      'meta.group.toml',
      'meta.object-binding-pattern-variable punctuation.destructuring',
      'punctuation.colon.graphql',
      'punctuation.definition.block.scalar.folded.yaml',
      'punctuation.definition.block.scalar.literal.yaml',
      'punctuation.definition.block.sequence.item.yaml',
      'punctuation.definition.entity.other.inherited-class',
      'punctuation.function.swift',
      'punctuation.separator.dictionary.key-value',
      'punctuation.separator.hash',
      'punctuation.separator.inheritance',
      'punctuation.separator.key-value',
      'punctuation.separator.key-value.mapping.yaml',
      'punctuation.separator.namespace',
      'punctuation.separator.pointer-access',
      'punctuation.separator.slice',
      'string.unquoted.heredoc punctuation.definition.string',
      'support.other.chomping-indicator.yaml',
      'punctuation.separator.annotation',
    ],
    'settings': {
      'foreground': palette.ansi.magenta,
    },
  },
  {
    'name': 'Brackets, braces, parens, etc.',
    'scope': [
      'keyword.operator.other.powershell',
      'keyword.other.statement-separator.powershell',
      'meta.brace.round',
      'meta.function-call punctuation',
      'punctuation.definition.arguments.begin',
      'punctuation.definition.arguments.end',
      'punctuation.definition.entity.begin',
      'punctuation.definition.entity.end',
      'punctuation.definition.tag.cs',
      'punctuation.definition.type.begin',
      'punctuation.definition.type.end',
      'punctuation.section.scope.begin',
      'punctuation.section.scope.end',
      'storage.type.generic.java',
      'string.template meta.brace',
      'string.template punctuation.accessor',
    ],
    'settings': {
      'foreground': palette.base.foreground,
    },
  },
  {
    'name': 'Variable interpolation operators',
    'scope': [
      'meta.string-contents.quoted.double punctuation.definition.variable',
      'punctuation.definition.interpolation.begin',
      'punctuation.definition.interpolation.end',
      'punctuation.definition.template-expression.begin',
      'punctuation.definition.template-expression.end',
      'punctuation.section.embedded.begin',
      'punctuation.section.embedded.coffee',
      'punctuation.section.embedded.end',
      'punctuation.section.embedded.end source.php',
      'punctuation.section.embedded.end source.ruby',
      'punctuation.definition.variable.makefile',
    ],
    'settings': {
      'foreground': palette.ansi.magenta,
    },
  },

  /*
    Serializable / Config languages
  */
  {
    'name': 'Block Level Variables',
    'scope': [
      'meta.block variable.other',
    ],
    'settings': {
      'foreground': palette.additional.purple,
    },
  },
  {
    'name': 'Other Variable, String Link',
    'scope': [
      'support.other.variable',
      'string.other.link',
    ],
    'settings': {
      'foreground': palette.additional.purple,
    },
  },
  {
    'name': 'Keys (serializable languages)',
    'scope': [
      'entity.name.function.target.makefile',
      'entity.name.section.toml',
      'entity.name.tag.yaml',
      'variable.other.key.toml',
    ],
    'settings': {
      'foreground': palette.ansi.cyan,
    },
  },
  {
    'name': 'Dates / timestamps (serializable languages)',
    'scope': [
      'constant.other.date',
      'constant.other.timestamp',
    ],
    'settings': {
      'foreground': palette.additional.orange,
    },
  },
  {
    'name': 'YAML aliases',
    'scope': [
      'variable.other.alias.yaml',
    ],
    'settings': {
      'fontStyle': 'italic underline',
      'foreground': palette.ansi.green,
    },
  },

  /*
    Storage
  */
  {
    'name': 'Storage',
    'scope': [
      'storage',
      'meta.implementation storage.type.objc',
      'meta.interface-or-protocol storage.type.objc',
      'source.groovy storage.type.def',
    ],
    'settings': {
      'fontStyle': 'regular',
      'foreground': palette.ansi.magenta,
    },
  },
  {
    'name': 'Types',
    'scope': [
      'entity.name.type',
      'keyword.primitive-datatypes.swift',
      'keyword.type.cs',
      'meta.protocol-list.objc',
      'meta.return-type.objc',
      'source.go storage.type',
      'source.groovy storage.type',
      'source.java storage.type',
      'source.powershell entity.other.attribute-name',
      'storage.class.std.rust',
      'storage.type.attribute.swift',
      'storage.type.c',
      'storage.type.core.rust',
      'storage.type.cs',
      'storage.type.groovy',
      'storage.type.objc',
      'storage.type.php',
      'storage.type.haskell',
      'storage.type.ocaml',
    ],
    'settings': {
      'fontStyle': 'italic',
      'foreground': palette.ansi.cyan,
    },
  },
  {
    'name': 'Generics, templates, and mapped type declarations',
    'scope': [
      'entity.name.type.type-parameter',
      'meta.indexer.mappedtype.declaration entity.name.type',
      'meta.type.parameters entity.name.type',
    ],
    'settings': {
      'foreground': palette.additional.orange,
    },
  },
  {
    'name': 'Modifiers',
    'scope': [
      'storage.modifier',
    ],
    'settings': {
      'foreground': palette.ansi.magenta,
    },
  },

  /*
    RegExp
  */
  {
    'name': 'RegExp string',
    'scope': [
      'string.regexp',
      'constant.other.character-class.set.regexp',
      'constant.character.escape.backslash.regexp',
    ],
    'settings': {
      'foreground': palette.ansi.yellow,
    },
  },
  {
    'name': 'Non-capture operators',
    'scope': [
      'punctuation.definition.group.capture.regexp',
    ],
    'settings': {
      'foreground': palette.ansi.magenta,
    },
  },
  {
    'name': 'RegExp start and end characters',
    'scope': [
      'string.regexp punctuation.definition.string.begin',
      'string.regexp punctuation.definition.string.end',
    ],
    'settings': {
      'foreground': palette.ansi.red,
    },
  },
  {
    'name': 'Character group',
    'scope': [
      'punctuation.definition.character-class.regexp',
    ],
    'settings': {
      'foreground': palette.additional.purple,
    },
  },
  {
    'name': 'Capture groups',
    'scope': [
      'punctuation.definition.group.regexp',
    ],
    'settings': {
      'foreground': palette.additional.orange,
    },
  },
  {
    'name': 'Assertion operators',
    'scope': [
      'punctuation.definition.group.assertion.regexp',
      'keyword.operator.negation.regexp',
    ],
    'settings': {
      'foreground': palette.ansi.red,
    },
  },
  {
    'name': 'Positive lookaheads',
    'scope': [
      'meta.assertion.look-ahead.regexp',
    ],
    'settings': {
      'foreground': palette.ansi.green,
    },
  },

  /*
    Strings
  */
  {
    'name': 'Strings',
    'scope': [
      'string',
    ],
    'settings': {
      'foreground': palette.ansi.yellow,
    },
  },
  {
    'name': 'JSON strings',
    'scope': [
      // 'support.type.property-name',
      'string.json',
      'source.json',
    ],
    'settings': {
      'foreground': palette.ansi.green,
    },
  },
  {
    'name': 'Unquoted strings',
    'scope': [
      'string.unquoted',
    ],
    'settings': {
      'foreground': palette.base.foreground,
    },
  },
  {
    'name': 'Docstrings',
    'scope': [
      'string.quoted.docstring.multi',
      'string.quoted.docstring.multi.python punctuation.definition.string.begin',
      'string.quoted.docstring.multi.python punctuation.definition.string.end',
      'string.quoted.docstring.multi.python constant.character.escape',
    ],
    'settings': {
      'foreground': palette.additional.gray[400],
    },
  },

  /*
    Variables
  */
  {
    'name': 'Variables and object properties',
    'scope': [
      'variable',
      'constant.other.key.perl',
      'support.variable.property',
      'variable.other.constant.js',
      'variable.other.constant.ts',
      'variable.other.constant.tsx',
    ],
    'settings': {
      'foreground': palette.base.foreground,
    },
  },
  {
    'name': 'Destructuring / aliasing reference name (LHS)',
    'scope': [
      'meta.import variable.other.readwrite',
      'meta.object-binding-pattern-variable variable.object.property',
      'meta.variable.assignment.destructured.object.coffee variable',
    ],
    'settings': {
      'fontStyle': 'italic',
      'foreground': palette.additional.orange,
    },
  },
  {
    'name': 'Destructuring / aliasing variable name (RHS)',
    'scope': [
      'meta.import variable.other.readwrite.alias',
      'meta.export variable.other.readwrite.alias',
      'meta.variable.assignment.destructured.object.coffee variable variable',
    ],
    'settings': {
      'fontStyle': 'normal',
      'foreground': palette.base.foreground,
    },
  },

  /*
    Languages extensions / Edge cases
  */
  {
    'name': 'GraphQL keys',
    'scope': [
      'meta.selectionset.graphql variable',
    ],
    'settings': {
      'foreground': palette.ansi.yellow,
    },
  },
  {
    'name': 'GraphQL function arguments',
    'scope': [
      'meta.selectionset.graphql meta.arguments variable',
    ],
    'settings': {
      'foreground': palette.base.foreground,
    },
  },
  {
    'name': 'GraphQL fragment name (definition)',
    'scope': [
      'entity.name.fragment.graphql',
      'variable.fragment.graphql',
    ],
    'settings': {
      'foreground': palette.ansi.cyan,
    },
  },
  {
    'name': 'Edge cases (foreground color resets)',
    'scope': [
      'constant.other.symbol.hashkey.ruby',
      'keyword.operator.dereference.java',
      'keyword.operator.navigation.groovy',
      'meta.scope.for-loop.shell punctuation.definition.string.begin',
      'meta.scope.for-loop.shell punctuation.definition.string.end',
      'meta.scope.for-loop.shell string',
      'storage.modifier.import',
      'punctuation.section.embedded.begin.tsx',
      'punctuation.section.embedded.end.tsx',
      'punctuation.section.embedded.begin.jsx',
      'punctuation.section.embedded.end.jsx',
      'punctuation.separator.list.comma.css',
      'constant.language.empty-list.haskell',
    ],
    'settings': {
      'foreground': palette.base.foreground,
    },
  },
  {
    'name': 'Shell variables prefixed with "$" (edge case)',
    'scope': [
      'source.shell variable.other',
    ],
    'settings': {
      'foreground': palette.ansi.blue,
    },
  },
  {
    'name': 'Powershell constants mistakenly scoped to `support`, rather than `constant` (edge)',
    'scope': [
      'support.constant',
    ],
    'settings': {
      'fontStyle': 'normal',
      'foreground': palette.ansi.blue,
    },
  },
  {
    'name': 'Makefile prerequisite names',
    'scope': [
      'meta.scope.prerequisites.makefile',
    ],
    'settings': {
      'foreground': palette.ansi.yellow,
    },
  },
  {
    'name': 'SCSS attibute selector strings',
    'scope': [
      'meta.attribute-selector.scss',
    ],
    'settings': {
      'foreground': palette.ansi.yellow,
    },
  },
  {
    'name': 'SCSS attribute selector brackets',
    'scope': [
      'punctuation.definition.attribute-selector.end.bracket.square.scss',
      'punctuation.definition.attribute-selector.begin.bracket.square.scss',
    ],
    'settings': {
      'foreground': palette.base.foreground,
    },
  },
  {
    'name': 'Haskell Pragmas',
    'scope': [
      'meta.preprocessor.haskell',
    ],
    'settings': {
      'foreground': palette.additional.gray[400],
    },
  },
]

export { tokenColors }

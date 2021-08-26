---
id: "Style_Definition"
title: "Module: Style Definition"
sidebar_label: "Style Definition"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### foundation

• `Const` **foundation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device` | `Object` |
| `device.widths` | `Object` |
| `device.widths.specs` | `Object` |
| `device.widths.specs.l` | `Object` |
| `device.widths.specs.l.maximum` | `undefined` |
| `device.widths.specs.l.minimum` | `number` |
| `device.widths.specs.m` | `Object` |
| `device.widths.specs.m.maximum` | `number` |
| `device.widths.specs.m.minimum` | `number` |
| `device.widths.specs.s` | `Object` |
| `device.widths.specs.s.maximum` | `number` |
| `device.widths.specs.s.minimum` | `number` |
| `device.widths.tokens` | `string`[] |
| `extraction` | `Object` |
| `extraction.definitions` | `Object` |
| `extraction.definitions.names` | `Object` |
| `extraction.definitions.names.color` | `string` |
| `extraction.definitions.names.foundation` | `string` |
| `extraction.definitions.names.shadow` | `string` |
| `extraction.definitions.names.type` | `string` |
| `extraction.definitions.path` | `string` |
| `extraction.figma` | `Object` |
| `extraction.figma.pageTitles` | `Object` |
| `extraction.figma.pageTitles.colorJBKR` | `string` |
| `extraction.figma.pageTitles.light` | `string` |
| `extraction.figma.pageTitles.shadow` | `string` |
| `extraction.figma.storage` | `Object` |
| `extraction.figma.storage.name` | `string` |
| `extraction.figma.storage.path` | `string` |
| `gridBase` | `number` |
| `motion` | `Object` |
| `motion.standardTime` | `Object` |
| `motion.standardTime.ms` | `number` |
| `motion.standardTime.s` | `number` |
| `position` | `Object` |
| `position.verticalAlignMiddle` | `string` |
| `position.zIndexes` | `Object` |
| `position.zIndexes.backgroundPrimary` | `number` |
| `position.zIndexes.backgroundSecondary` | `number` |
| `position.zIndexes.contentDimmer` | `number` |
| `position.zIndexes.contentPrimary` | `number` |
| `position.zIndexes.header` | `number` |
| `position.zIndexes.modal` | `number` |
| `position.zIndexes.modalToggle` | `number` |
| `shape` | `Object` |
| `shape.circular` | `string` |
| `shape.standardCorners` | `string` |
| `shape.straightCorners` | `string` |
| `type` | `Object` |
| `type.family` | `string` |
| `type.lineHeight` | `Object` |
| `type.lineHeight.scalingMultipliers` | `Object` |
| `type.lineHeight.scalingMultipliers.body` | `Object` |
| `type.lineHeight.scalingMultipliers.body.high` | `number` |
| `type.lineHeight.scalingMultipliers.body.highestLowSize` | `number` |
| `type.lineHeight.scalingMultipliers.body.low` | `number` |
| `type.lineHeight.scalingMultipliers.display` | `Object` |
| `type.lineHeight.scalingMultipliers.display.high` | `number` |
| `type.lineHeight.scalingMultipliers.display.highestLowSize` | `number` |
| `type.lineHeight.scalingMultipliers.display.low` | `number` |
| `type.lineHeight.tokens` | `string`[] |
| `type.size` | `Object` |
| `type.size.baseMultipliersByDeviceWidth` | `Object` |
| `type.size.baseMultipliersByDeviceWidth.l` | `number` |
| `type.size.baseMultipliersByDeviceWidth.m` | `number` |
| `type.size.baseMultipliersByDeviceWidth.s` | `number` |
| `type.size.scalingMultipliersByDeviceWidth` | `Object` |
| `type.size.scalingMultipliersByDeviceWidth.l` | `Object` |
| `type.size.scalingMultipliersByDeviceWidth.l.high` | `number` |
| `type.size.scalingMultipliersByDeviceWidth.l.highestLowStep` | `number` |
| `type.size.scalingMultipliersByDeviceWidth.l.low` | `number` |
| `type.size.scalingMultipliersByDeviceWidth.m` | `Object` |
| `type.size.scalingMultipliersByDeviceWidth.m.high` | `number` |
| `type.size.scalingMultipliersByDeviceWidth.m.highestLowStep` | `number` |
| `type.size.scalingMultipliersByDeviceWidth.m.low` | `number` |
| `type.size.scalingMultipliersByDeviceWidth.s` | `Object` |
| `type.size.scalingMultipliersByDeviceWidth.s.high` | `number` |
| `type.size.scalingMultipliersByDeviceWidth.s.highestLowStep` | `number` |
| `type.size.scalingMultipliersByDeviceWidth.s.low` | `number` |
| `type.size.scalingSteps` | `Object` |
| `type.size.scalingSteps.1xl` | `number` |
| `type.size.scalingSteps.1xs` | `number` |
| `type.size.scalingSteps.2xl` | `number` |
| `type.size.scalingSteps.2xs` | `number` |
| `type.size.scalingSteps.3xl` | `number` |
| `type.size.scalingSteps.3xs` | `number` |
| `type.size.scalingSteps.4xl` | `number` |
| `type.size.scalingSteps.5xl` | `number` |
| `type.size.scalingSteps.l` | `number` |
| `type.size.scalingSteps.m` | `number` |
| `type.size.scalingSteps.s` | `number` |
| `type.size.tokens` | `string`[] |
| `type.slant` | `Object` |
| `type.slant.tokens` | `string`[] |
| `type.spacing` | `Object` |
| `type.spacing.multiplier` | `number` |
| `type.weight` | `Object` |
| `type.weight.baseMultipliersByWeight` | `Object` |
| `type.weight.baseMultipliersByWeight.bold` | `number` |
| `type.weight.baseMultipliersByWeight.regular` | `number` |
| `type.weight.scalingMultipliersByWeight` | `Object` |
| `type.weight.scalingMultipliersByWeight.bold` | `Object` |
| `type.weight.scalingMultipliersByWeight.bold.maxAddition` | `number` |
| `type.weight.scalingMultipliersByWeight.bold.maxSubtraction` | `number` |
| `type.weight.scalingMultipliersByWeight.bold.natural` | `number` |
| `type.weight.scalingMultipliersByWeight.regular` | `Object` |
| `type.weight.scalingMultipliersByWeight.regular.maxAddition` | `number` |
| `type.weight.scalingMultipliersByWeight.regular.maxSubtraction` | `number` |
| `type.weight.scalingMultipliersByWeight.regular.natural` | `number` |
| `type.weight.tokens` | `string`[] |
| `visibility` | `Object` |
| `visibility.blockHidden` | `string` |
| `visibility.inlineHidden` | `string` |
| `visibility.overrideBlockHidden` | `string` |
| `visibility.tableColumnHidden` | `string` |

#### Defined in

[foundation.ts:9](https://github.com/jamesTbaker/jbkr/blob/563bdbc/modules/style-definition/src/lib/foundation.ts#L9)

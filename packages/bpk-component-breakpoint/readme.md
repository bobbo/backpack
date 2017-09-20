# bpk-component-breakpoint

> Backpack breakpoint component.

## Installation

```sh
npm install bpk-component-breakpoint --save-dev
```

## Usage

```js
import React from 'react';
import BpkBreakpoint, { BREAKPOINTS } from 'bpk-component-breakpoint';

const activeStyle = {
  padding: spacingBase,
  backgroundColor: colorGreen500,
};

const inactiveStyle = {
  padding: spacingBase,
  backgroundColor: colorGray100,
};

export default () => (
  <div>
    <BpkBreakpoint query={BREAKPOINTS.MOBILE}>
      {isActive => <div style={isActive ? activeStyle : inactiveStyle}>{'MOBILE'}</div>}
    </BpkBreakpoint>
    <BpkBreakpoint query={BREAKPOINTS.TABLET}>
      {isActive => <div style={isActive ? activeStyle : inactiveStyle}>{'TABLET'}</div>}
    </BpkBreakpoint>
    <BpkBreakpoint query={BREAKPOINTS.TABLET_ONLY}>
      {isActive => <div style={isActive ? activeStyle : inactiveStyle}>{'TABLET ONLY'}</div>}
    </BpkBreakpoint>
    <BpkBreakpoint query={BREAKPOINTS.ABOVE_MOBILE}>
      {isActive => <div style={isActive ? activeStyle : inactiveStyle}>{'ABOVE MOBILE'}</div>}
    </BpkBreakpoint>
    <BpkBreakpoint query={BREAKPOINTS.ABOVE_TABLET}>
      {isActive => <div style={isActive ? activeStyle : inactiveStyle}>{'ABOVE TABLET'}</div>}
    </BpkBreakpoint>
  </div>
);
```

## Props

| Property  | PropType           | Required | Default Value |
| --------- | ------------------ | -------- | ------------- |
| children  | node               | true     | -             |
| query     | oneOf(BREAKPOINTS) | true     | -             |
| legacy    | bool               | false    | false         |

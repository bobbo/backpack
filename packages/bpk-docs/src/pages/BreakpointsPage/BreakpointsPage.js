/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import BpkBreakpoint, { BREAKPOINTS } from 'bpk-component-breakpoint';
import breakpointReadme from 'bpk-component-breakpoint/readme.md';
import { spacingBase, colorGreen500, colorGray100 } from 'bpk-tokens/tokens/base.es6';

import DocsPageBuilder from './../../components/DocsPageBuilder';
import Paragraph from './../../components/Paragraph';

const activeStyle = {
  padding: spacingBase,
  backgroundColor: colorGreen500,
};

const inactiveStyle = {
  padding: spacingBase,
  backgroundColor: colorGray100,
};

const components = [
  {
    id: 'default',
    title: 'Default',
    examples: [
      <BpkBreakpoint query={BREAKPOINTS.MOBILE}>
        {isActive => <div style={isActive ? activeStyle : inactiveStyle}>{'MOBILE'}</div>}
      </BpkBreakpoint>,
      <BpkBreakpoint query={BREAKPOINTS.TABLET}>
        {isActive => <div style={isActive ? activeStyle : inactiveStyle}>{'TABLET'}</div>}
      </BpkBreakpoint>,
      <BpkBreakpoint query={BREAKPOINTS.TABLET_ONLY}>
        {isActive => <div style={isActive ? activeStyle : inactiveStyle}>{'TABLET ONLY'}</div>}
      </BpkBreakpoint>,
      <BpkBreakpoint query={BREAKPOINTS.ABOVE_MOBILE}>
        {isActive => <div style={isActive ? activeStyle : inactiveStyle}>{'ABOVE MOBILE'}</div>}
      </BpkBreakpoint>,
      <BpkBreakpoint query={BREAKPOINTS.ABOVE_TABLET}>
        {isActive => <div style={isActive ? activeStyle : inactiveStyle}>{'ABOVE TABLET'}</div>}
      </BpkBreakpoint>,
    ],
  },
];

const BreakpointsPage = () => <DocsPageBuilder
  title="Breakpoints"
  blurb={[
    <Paragraph>
      To simplify things, Backpack uses only three breakpoints optimised for mobile, tablet and desktop viewports.
    </Paragraph>,
  ]}
  components={components}
  readme={breakpointReadme}
  sassdocId="breakpoints"
/>;

export default BreakpointsPage;

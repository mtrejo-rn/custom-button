import { storiesOf } from "@storybook/react";
import React from "react";

import CustomButton from '../../src/index'


storiesOf("Custom button", module)
    .add("simple",()=><CustomButton />)
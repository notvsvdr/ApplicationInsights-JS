// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { IChannelControls } from "applicationinsights-core-js";

export interface IChannelControlsAI extends IChannelControls {
    flush();
}
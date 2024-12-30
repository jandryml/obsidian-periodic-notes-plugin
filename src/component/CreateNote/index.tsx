import { PlusOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Radio, Tabs, Tooltip } from 'antd';
import dayjs from 'dayjs';
import { Notice, TFile, type WorkspaceLeaf } from 'obsidian';
import React from 'react';
import { useEffect, useRef, useState } from 'react';

import type { PeriodicNotesTemplateFilePath, PluginSettings } from '../../type';
// import './index.less';

import weekOfYear from 'dayjs/plugin/isoWeek';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import updateLocale from 'dayjs/plugin/updateLocale';
import { type LunarFestival, SolarDay, type SolarFestival } from 'tyme4ts';



import { ConfigProvider } from '../ConfigProvider';

dayjs.extend(weekOfYear);
dayjs.extend(quarterOfYear);
dayjs.extend(updateLocale);

const getFestivalName = (festival: LunarFestival | SolarFestival | null) => {
  return festival?.toString().split(' ')[1]?.slice(-3) || '';
};

export const CreateNote = (props: { width: number }) => {
  const { width } = props;
  return (
    <ConfigProvider
      components={{
        DatePicker: {
          cellWidth: width ? width / 7.5 : 45,
        },
      }}
    >
      <Tooltip title={"Helpin"}>
        <QuestionCircleOutlined
          style={{ position: 'fixed', right: 16 }}
        />
      </Tooltip>
    </ConfigProvider>
  );
};

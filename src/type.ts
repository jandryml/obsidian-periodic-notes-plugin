import type { Locale } from 'antd/es/locale';
import type { App } from 'obsidian';

export type PeriodicNotesTemplateFilePath =
  | 'periodicNotesTemplateFilePathYearly'
  | 'periodicNotesTemplateFilePathQuarterly'
  | 'periodicNotesTemplateFilePathMonthly'
  | 'periodicNotesTemplateFilePathWeekly'
  | 'periodicNotesTemplateFilePathDaily';

export type IndexType = 'readme' | 'folderName';

export type PluginSettings = {
    periodicNotesPath: string;
    usePeriodicAdvanced: boolean;
    projectsPath: string;
    projectsTemplateFilePath: string;
    areasPath: string;
    areasTemplateFilePath: string;
    resourcesPath: string;
    resourcesTemplateFilePath: string;
    archivesPath: string;
    archivesTemplateFilePath: string;
    projectListHeader: string;
    areaListHeader: string;
    habitHeader: string;
    dailyRecordHeader: string;
    dailyRecordAPI: string;
    dailyRecordToken: string;
    dailyRecordWarning: boolean;
    dailyRecordCreating: boolean;
    useDailyRecord: boolean;
    usePeriodicNotes: boolean;
    usePARANotes: boolean;
    usePARAAdvanced: boolean;
    paraIndexFilename: IndexType;
    weekStart: number;
    useChineseCalendar: boolean;
  } & Record<PeriodicNotesTemplateFilePath, string>;

export type ContextType = {
    app: App;
    settings: PluginSettings;
    locale: Locale;
  };
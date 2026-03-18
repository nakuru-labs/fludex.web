export type ModuleState = 'ready' | 'wip' | 'planned';

export interface ModuleMeta {
    key: string;
    name: string;
    state: ModuleState;
    summary: string;
    base: string;
    changelog: string;
}

export const modules: ModuleMeta[] = [
    {
        key: 'lens',
        name: 'Lens',
        state: 'ready',
        summary: 'Displays detailed information about the current runtime environment, including device, display, build, and runtime state.',
        base: '/modules/lens/',
        changelog: '/modules/lens/changelog'
    },
    {
        key: 'playground',
        name: 'Playground',
        state: 'ready',
        summary: 'Customizable space for creating and testing game-specific debug widgets.',
        base: '/modules/playground/',
        changelog: '/modules/playground/changelog'
    },
    {
        key: 'console',
        name: 'Console',
        state: 'wip',
        summary: 'Log viewer with callstacks & filters (in progress).',
        base: '/modules/console/',
        changelog: '/modules/console/changelog'
    }
];
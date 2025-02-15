import { OnlineAccessInfo } from '../oauth/types';
export interface SessionInterface {
    readonly id: string;
    shop: string;
    state: string;
    isOnline: boolean;
    scope?: string;
    expires?: Date;
    accessToken?: string;
    onlineAccessInfo?: OnlineAccessInfo;
    isActive(): boolean;
    app: string;
}
//# sourceMappingURL=types.d.ts.map
import { Repository } from '../core/repository';
export declare class QpRepository extends Repository {
    getCooldowns(): Promise<import("instagram-private-api/src").IgResponse<any>>;
    batchFetch(): Promise<import("instagram-private-api/src").IgResponse<any>>;
    surfacesToQueries: string;
    surfacesToTriggers: string;
}

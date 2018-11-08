import { Signal1 } from '../signals/Signal1';
import { ITickProvider } from './ITickProvider';
export declare class IntervalTickProvider extends Signal1<number> implements ITickProvider {
    private intervalId;
    private previousTime;
    private pInterval;
    constructor(interval?: number);
    start(): void;
    private update;
    stop(): void;
    interval: number;
    readonly inteval: number;
    readonly playing: boolean;
}

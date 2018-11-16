export interface ITickProvider {
    readonly playing: boolean;
    add(listener: (delta: number) => void): void;
    remove(listener: (delta: number) => void): void;
    start(): void;
    stop(): void;
}

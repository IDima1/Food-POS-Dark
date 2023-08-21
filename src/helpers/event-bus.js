import { EventEmitter } from '@distributedlab/tools';

export const BUS_EVENTS = {
    error: 'error',
    warning: 'warning',
    success: 'success',
    info: 'info',
};

const DefaultBusEventMap = {
    [BUS_EVENTS.success]: undefined,
    [BUS_EVENTS.error]: undefined,
    [BUS_EVENTS.warning]: undefined,
    [BUS_EVENTS.info]: undefined,
};

export const bus = new EventEmitter(DefaultBusEventMap);

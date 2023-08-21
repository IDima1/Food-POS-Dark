import log from 'loglevel';
import { bus, BUS_EVENTS } from '@/helpers';
import { i18n } from '@/localization';

class ErrorHandler {
    static process(error, errorMessage = '') {
        const msgTranslation = errorMessage || ErrorHandler._getErrorMessage(error);
        bus.emit(BUS_EVENTS.error, msgTranslation);

        ErrorHandler.processWithoutFeedback(error);
    }

    static processWithoutFeedback(error) {
        log.error(error);
    }

    static _getErrorMessage(error) {
        let errorMessage = '';

        if (error instanceof Error) {
        switch (error.constructor) {
            default: {
                errorMessage = i18n.global.t('errors.default');
            }
        }
        }

        return errorMessage;
    }
}

export { ErrorHandler };
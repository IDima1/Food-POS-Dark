import {
    required as _required,
    numeric as _numeric,
    alpha as _alpha,
    minLength as _minLength,
    maxLength as _maxLength,
    sameAs as _sameAs,
} from '@vuelidate/validators';
import { createI18nMessage } from '@vuelidate/validators';
import get from 'lodash/get';
import { i18n } from '@/localization';

const { t } = i18n.global || i18n;

const messagePath = ({ $validator }) => `validations.field-error_${$validator}`;

const withI18nMessage = createI18nMessage({ t, messagePath });

const required = withI18nMessage(_required);

const numeric = withI18nMessage(_numeric);

const alpha = withI18nMessage(_alpha);

const minLength = (length) => withI18nMessage(_minLength(length));

const maxLength = (length) => withI18nMessage(_maxLength(length));

const sameAs = (field) => {
  return withI18nMessage(_sameAs(field, get(field, '_key')));
};

export { required, numeric, alpha, minLength, maxLength, sameAs };

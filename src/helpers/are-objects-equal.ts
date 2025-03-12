import { AnyObject } from './global';

/** Сравнивает два объекта */
export function areObjectsEqual(obj1: AnyObject, obj2: AnyObject): boolean {
    // Проверка на то, что оба объекта имеют одинаковое количество свойств
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    // Проверка на то, что все свойства одного объекта присутствуют в другом объекте и имеют одинаковые значения
    for (const key of keys1) {
        if (!Object.prototype.hasOwnProperty.call(obj2, key) || obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

import {v4} from "uuid";

export class HelperService {
    static GetFullIntersection(arr1, arr2) {
        return arr1 && arr2 && arr1.length && arr2.length
            ? arr1.every((elem) => arr2.includes(elem)) && arr2.length === arr1.length
            : false;
    }

    static GenId() {
        return v4();
    }
}

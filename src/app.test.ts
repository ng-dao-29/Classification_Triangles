import {filterByTerm} from "./app";

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output);
    });
});

import {TriangleClassifier} from "./app";
describe("TriangleClassifier test", () =>{

    test("test tam giác thường", () =>{
        let adge1 = 2;
        let adge2 = 2;
        let adge3 = 2;

        let triangle:TriangleClassifier = new TriangleClassifier(adge1,adge2,adge3)
        expect(triangle.triangleType()).toEqual("tam giác đều");
    })

    test("test tam giác cân", () => {
        let adge1 = 2;
        let adge2 = 2;
        let adge3 = 3;

        let triangle:TriangleClassifier = new TriangleClassifier(adge1,adge2,adge3)
        expect(triangle.triangleType()).toEqual("tam giác cân");
    })

    test("test tam giác thường", () => {
        let adge1 = 2;
        let adge2 = 4;
        let adge3 = 5;

        let triangle:TriangleClassifier = new TriangleClassifier(adge1,adge2,adge3)
        expect(triangle.triangleType()).toEqual("tam giác thường");
    })

    test("ko phải tam giác 1", () => {
        let adge1 = 8;
        let adge2 = 2;
        let adge3 = 3;

        let triangle:TriangleClassifier = new TriangleClassifier(adge1,adge2,adge3)
        expect(triangle.triangleType()).toEqual("không phải tam giác");
    })

    test("ko phải tam giác 2", () => {
        let adge1 = -1;
        let adge2 = 2;
        let adge3 = 1;

        let triangle:TriangleClassifier = new TriangleClassifier(adge1,adge2,adge3)
        expect(triangle.triangleType()).toEqual("không phải tam giác")
    })

    test("ko phải tam giác 3", () => {
        let adge1 = 0;
        let adge2 = 1;
        let adge3 = 1;

        let triangle:TriangleClassifier = new TriangleClassifier(adge1,adge2,adge3)
        expect(triangle.triangleType()).toEqual("không phải tam giác")
    })

    test("tam giác vuông", () => {
        let adge1 = 3;
        let adge2 = 4;
        let adge3 = 5;

        let triangle:TriangleClassifier = new TriangleClassifier(adge1,adge2,adge3)
        expect(triangle.triangleType()).toEqual("tam giác vuông")
    })

})
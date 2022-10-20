export function filterByTerm(arr: any, pattern: string) {
    return arr.filter( (item: any) => {
        return item.url.match(pattern);
    });
}

export class TriangleClassifier {
    edge1: number;
    edge2: number;
    edge3: number;

    constructor(edge1: number, edge2: number, edge3: number) {
        this.edge1 = edge1;
        this.edge2 = edge2;
        this.edge3 = edge3;
    }
    triangleType():string {
        let  checkTriangle = this.edge1 + this.edge2 > this.edge3&&
            this.edge2 + this.edge3 > this.edge1&&
            this.edge3 + this.edge1 > this.edge2;

        let  equilateralTriangle = this.edge1 == this.edge2 && this.edge2 == this.edge3 && this.edge3 == this.edge1;

        let isoscelesTriangle = (this.edge1 == this.edge2 && this.edge2 != this.edge3)
        || (this.edge2 == this.edge3 && this.edge3 != this.edge1)
        || (this.edge3 == this.edge1 && this.edge1 != this.edge2)

        let rightTriangle = (this.edge1*this.edge1)+(this.edge2*this.edge2) == this.edge3*this.edge3||
                            (this.edge2*this.edge2)+(this.edge3*this.edge3) == (this.edge1*this.edge1)||
                             (this.edge3*this.edge3)+(this.edge1*this.edge1)==(this.edge2*this.edge2)

        if(checkTriangle) {
            if(equilateralTriangle) {
                return "tam giác đều"
            }
            if(isoscelesTriangle) {
                return "tam giác cân"
            }
            if(rightTriangle) {
                return "tam giác vuông"
            }
            else {
                return "tam giác thường"
            }

        }else {
            return "không phải tam giác"
        }
    }
}

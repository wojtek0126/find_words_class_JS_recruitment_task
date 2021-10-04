class WordSearch {
    constructor(letterGrid) {
        this.letterGrid = letterGrid;
    }

    find(word) {
        [this.word] = word;



        let R, C;

        let x = [-1, -1, -1, 0, 0, 1, 1, 1];

        let y = [-1, 0, 1, -1, 1, -1, 0, 1];


        function search2D(grid, row, col, word = this.word) {

            if (grid[row][col] != word[0])
                return false;

            let len = word.length;


            for (let direction = 0; direction < 8; direction++) {

                let k, rd = row + x[direction],
                    cd = col + y[direction];


                for (k = 1; k < len; k++) {

                    if (rd >= R || rd < 0 || cd >= C || cd < 0)
                        break;


                    if (grid[rd][cd] != word[k])
                        break;


                    rd += x[direction];
                    cd += y[direction];
                }


                if (k == len)
                    return true;
            }
            return false;
        }


        function patternSearch(grid, word = this.word) {
            let resultStart = [];
            let resultEnd = [];
            let result = {
                [word]: {
                    start: resultStart,
                    end: resultEnd
                }
            };

            for (let row = 0; row < R; row++) {
                for (let col = 0; col < C; col++) {
                    if (search2D(grid, row, col, word)) {
                        resultStart.push(row + 1, col + 1);
                        resultEnd.push(row + 1, col + word.length);
                    }
                }
            }
            return result;
        }



        R = this.letterGrid.length;
        C = this.letterGrid[0].length;

        return patternSearch(this.letterGrid, this.word);

    }
}

let letterGrid = ['abcdefghij',
    'saggsasagg',
    'qwopjrpqis',
    'mfaslkfmsa',
    'msflksmafl',
    'oqjrwqiwra',
    'ijqwrjifmm',
    'mafslkfasm',
    'koqwopwqrk',
    'ssjavaslfa',
];

const wordSearch = new WordSearch(letterGrid);

console.log(wordSearch.find(['java']));
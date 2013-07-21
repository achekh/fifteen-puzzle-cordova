'use strict';

angular.module('fifteenApp')
    .controller('GameCtrl', function ($scope) {

        $scope.setFinished = function (isFinished) {
            $scope.isFinished = isFinished;
            $scope.finishedStyle = { display: isFinished ? 'block' : 'none' };
        };
        
        $scope.resetBoard = function () {
            $scope.board = createBoard();
            $scope.setFinished(false);
        };

        $scope.resetBoard();

        $scope.moveTile = function(row, column) {
            var board = $scope.board;
            if ($scope.isFinished || !isValidMove({row: row, column: column}, board.space))
                return;
            var cell = board[row][column];
            board[row][column] = board[board.space.row][board.space.column];
            board[board.space.row][board.space.column] = cell;
            board.space.row = row;
            board.space.column = column;
            $scope.setFinished(checkIsFinished(board));
        };

        function createBoard() {
            var boardSize = 4;
            var tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null];
            var board = [];
            for (var r = 0; r < boardSize; r++) {
                var row = [];
                for (var c = 0; c < boardSize; c++) {
                    var val = tiles.splice(Math.floor(Math.random() * tiles.length), 1)[0];
                    var cell = { isTile: val != null, content: val };
                    row.push(cell);
                    if (!cell.isTile) {
                        board.space = { row: r, column: c };
                    };
                }
                board.push(row);
            }
            return board;
        }

        function isValidMove(from, to) {
            return Math.abs(from.row - to.row) + Math.abs(from.column - to.column) == 1;
        }

        function checkIsFinished(board) {
            var boardSize = board.length;
            if (!(board.space.row == boardSize - 1 && board.space.column == boardSize - 1))
                return false;
            for (var r = 0; r < boardSize; r++) {
                var row = board[r];
                for (var c = 0; c < boardSize; c++) {
                    if (r == boardSize - 1 && c == boardSize - 1) return true;
                    var cell = row[c];
                    if (cell.content != r * boardSize + c + 1) return false;
                }
            }
            return false; // must never happen
        }
    });

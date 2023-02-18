class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        listOfSetsGrid = [set() for i in range (9)]
        grid = 0

        for i in range (9):

            setCol = set()
            setRow = set()

            if i < 3: grid = 0
            elif i < 6: grid = 3
            else: grid = 6        

            for j in range (9):
                
                # Rule #1
                if board[i][j] in setRow and board[i][j] != '.':
                    return False
                setRow.add(board[i][j])

                # Rule #2
                if board[j][i] in setCol and board[j][i] != '.':
                    return False 
                setCol.add(board[j][i])

                # Rule #3
                if j == 3 or j == 6:
                    grid += 1
                if board[i][j] in listOfSetsGrid[grid] and board[i][j] != '.':
                    return False
                listOfSetsGrid[grid].add(board[i][j])

        return True
        
                           

            

            


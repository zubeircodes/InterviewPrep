# given a grid and a target word, see if the word exists in the grid. 
# strategy:
#     if we find a cell that contains the first letter, start dfs. 
#     Check to see if we are in bounds, then if we have already visited the cell,
#     then continue to the next letter and next cell until we find a match, or not

class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        rows = len(board)
        cols = len(board[0])
        visited = [[False] * cols for _ in range(rows)]
        k = 0
        for i in range(rows):
            for j in range(cols):
                if self.dfs(i, j, board, word, k, visited):
                    return True

        return False

    def inbound(self, num, lim): 
        return num >= 0 and num < lim

    def dfs(self, x, y, board, word, k, visited):
        if visited[x][y]:
            return False

        if board[x][y] == word[k]:
            visited[x][y] = True
            if k == len(word) - 1:
                return True
            else:
                if self.inbound( x+1, len(board)):
                    if self.dfs( x+1, y, board, word, k+1, visited):
                        return True
                if self.inbound( x-1, len(board)):
                    if self.dfs( x-1, y, board, word, k+1, visited) : 
                        return True
                if self.inbound( y+1, len(board[0])):
                    if self.dfs( x, y+1, board, word, k+1, visited):
                        return True
                if self.inbound( y-1, len(board[0])):
                    if self.dfs( x, y-1, board, word, k+1, visited):
                        return True
        visited[x][y] = False
        return False
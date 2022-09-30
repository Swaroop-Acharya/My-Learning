name=str(input())

nameStr={}

for i in name:
    if i in nameStr:
        nameStr[i]+=1
    else:
        nameStr[i]=1

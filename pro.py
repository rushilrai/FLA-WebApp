l=[]
l1=[]
data = {'inputs':[0,1,2], 'inputstate':'A', 'finalstate':['C', 'D'], 'transition-table':{ 'A':[ 'B', 'C', 'D'], 'B':['C', 'D', 'A'], 'C':['D', 'A', 'B'], 'D':['A', 'B', 'C']}}
l.append(data['inputs'])
a=len(l[0])
for i in range(0,a):
    l1.append(l[0][i])#input list is l1
l.clear()
z=[]
l.append(data['finalstate'])
y=len(l[0])
for j in range(0,y):
    z.append(l[0][j])# finalstate list is z
l.clear()
l2=(data['transition-table'])#l2 is dict of trasition-table
f=input("enter")
g=str(f)
l3=[]
#l3[:0]=g
l3=list(map(int, str(f)))#list of the checking input
h=len(l3)
l4=[]
l5=[]
l8=[]
l4=(data.get("inputstate"))#initial state in list
l8=[l4]

l.append(l2[l4])

l5 = [ item for elem in l for item in elem]#List of input state from dictionary calling
#l8=[l4]
#print(l8)
#print(l5)
#b=len(l[0])
#for i in range(0,b):
    #l5.append(l[0][i])
l6={}
for key in l1:
    for value in l5:
        l6[key]=value#key value pair of where to go which state
        l5.remove(value)
        break
l5.clear()
#Call h walaa thing
#print (l6)
l7=[]
#print(l6)
for i in range (0,h):  
    l7=l6.get(l3[i])
    l8.append(l7)
    l9=l8[-1]
    l.clear()
    l.append(l2[l9])
    #print(l)
    l5 = [ item for elem in l for item in elem]#List of input state from dictionary calling
    #print(l5)
#l8=[l4]
#print(l8)
#print(l5)
#b=len(l[0])
#for i in range(0,b):
    #l5.append(l[0][i])
    l6={}
    for key in l1:
        for value in l5:
            l6[key]=value#key value pair of where to go which state
            l5.remove(value)
            break
    l5.clear()
    #print(l6)
l10=l9
#print(l10)
if l10 in z:
    print("Yes, Input satisfies with the given model")
else:
    print("No, Input does not satisfy with the given model")
    #change l6
     #for chaning l6 we need to change l5
       #for changing l5 we need to change l
         #for changing l we need to change l4
           


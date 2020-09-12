# utility import
from utils import debug, cmpStringNList

# Deterministic Finite Automata 
class DFA:
    # load model
    def __init__(self, dfa_model):
        self.dfa_model = dfa_model

    # check model for FA regulations
    def checkModel(self):
        for trans in self.dfa_model['transit-table'].keys():
            if len(self.dfa_model['transit-table'][trans]) != len(self.dfa_model['inputs']):
                return False
        return True

    # each transition for given input from current state
    def nextState(self, currState, i):
        transitions = self.dfa_model['transit-table']
        thisTransition = transitions[currState]
        nextState = thisTransition[self.dfa_model['inputs'].index(i)]
        return nextState

    # check if the input is accepted or not
    def checkInput(self, input_string):
        if self.checkModel():
            currState = self.dfa_model['inputstate']
            for i in input_string:
                nxtState = self.nextState(currState, i)
                debug.success(currState + '--' + str(i) + '-->' + nxtState)
                currState = nxtState
            return True if (currState in self.dfa_model['finalstates']) else False
        else:
            return "invalid model"

# Non-Deterministic Finite Automata
class NFA:
    # load model
    def __init__(self, nfa_model):
        self.nfa_model = nfa_model

    # check model for FA regulations
    def checkModel(self):
        for trans in self.nfa_model['transit-table'].keys():
            if len(self.nfa_model['transit-table'][trans]) != len(self.nfa_model['inputs']):
                return False
        return True

    # convert the NFA Model to a DFA Model
    def convertToDFA(self):
        allInputs = self.nfa_model['inputs']
        transTableNFA = self.nfa_model['transit-table']
        transTableDFA = {
            str(list(transTableNFA.keys())[0]): [''.join(x) for x in transTableNFA[self.nfa_model['inputstate']]]
        }
        keyCount = 0
        while keyCount < len(transTableDFA.keys()):
            eachState = list(transTableDFA.keys())[keyCount]
            for eachNextState in transTableDFA[eachState]:
                if eachNextState not in list(transTableDFA.keys()):
                    transTableDFA.update({
                        eachNextState: []
                    })
                    for i in allInputs:
                        newTransitions = []
                        for eachOldState in eachNextState:
                            newTransitions += transTableNFA[eachOldState][allInputs.index(i)]
                            newTransitions.sort()
                        newTransitions = list(set(newTransitions))
                        newTransitions.sort()
                        union = ''.join(newTransitions)
                        # print(i, )
                        transTableDFA[eachNextState].append(union)
            keyCount = keyCount + 1
        
        finalStates = []
        for state in list(transTableDFA.keys()):
            for defaultFinalState in self.nfa_model['finalstates']:
                if defaultFinalState in state:
                    finalStates.append(state)

        dfa_model = {
            'inputs': allInputs,
            'transit-table': transTableDFA,
            'inputstate': self.nfa_model['inputstate'],
            'finalstates': finalStates
        }

        return dfa_model

    # check the input for the converted DFA Model
    def checkInput(self, thisInputString):
        if not self.checkModel():
            return 'invalid model'
        dfa_model = DFA(self.convertToDFA())
        return dfa_model.checkInput(thisInputString)
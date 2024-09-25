def solution(participant, completion):
    participant_dict = dict()
    
    for i in participant:
        if i in participant_dict:
            participant_dict[i] += 1
        else: participant_dict[i] = 1
    
    for i in completion:
        if i in participant_dict: participant_dict[i] -= 1
        
    for key , value in participant_dict.items():
        if value == 1:
            return key

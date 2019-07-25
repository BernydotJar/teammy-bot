# DialogFlow vs Lex vs Luis

## Initial conditions:

 - Intent: BookHotel
 - Training phrases: 
 ```
   - Book a hotel
   - want a make hotel reservations
   - Book a ​2 night stay in ​medellin
   ```
  - Entities / Slot filling
    - location
    - nights number 
    - checkIn Date

## Detection of intents and values:

**The tests were done simulating a normal user with spelling mistakes and bad writing to test the capabilities of the NPL services**


- **User says "hotel":**
  - **DialogFlow:** 
      >Intent detection: BookHotel
      > Confidence: 0.66
    > ![enter image description here](https://i.imgur.com/Whukr5k.png)
    
  - **Lex:** 
      >Intent detection: fallback intent
      > Confidence: None
	>![enter image description here](https://i.imgur.com/YRF2X8r.png)
   - **Luis.ia:** Detect BookHotel
      >Intent detection: BookHotel
      > Confidence: 0.67![enter image description here](https://i.imgur.com/plZpbng.png)

- **User says "book 2 night in bogota at september":**
  - **DialogFlow:** 
      >Intent detection: BookHotel
      > Confidence: 0.55
      > Entity detection: 
      > - Nights number:  true
      > - Location:  true
    > ![enter image description here](https://i.imgur.com/kmDlZlu.png)
    
  - **Lex:** 
      >Intent detection: fallback intent
      > Confidence: None
      > Entity detection: 
      > - Nights number:  false
      > - Location:  false      
	>![enter image description here](https://i.imgur.com/WoP0Mv8.png)
   - **Luis.ia:** Detect BookHotel
      >Intent detection: BookHotel
      > Confidence: 0.67
      > Entity detection: 
      > - Nights number:  true
      > - Location:  true![enter image description here](https://i.imgur.com/aYsHxtt.png)

### Adding new training phrase: 
```
- on september 2
```

- **User says "book a 3 night in barcelona at september 3":**
  - **DialogFlow:** 
      >Intent detection: BookHotel
      > Confidence: 0.61
      > Entity detection: 
      > - Nights number:  true
      > - Location:  true
       > - checking date:  true
    > ![enter image description here](https://i.imgur.com/IPVQbAP.png)
    
  - **Lex:** 
      >Intent detection: fallback intent
      > Confidence: None
      > Entity detection: 
      > - Nights number:  true
      > - Location:  false
      > - checking date:  true      
	>![enter image description here](https://i.imgur.com/bAe6kJg.png)
   - **Luis.ia:**
      >Intent detection: BookHotel
      > Confidence: 0.98
      > Entity detection: 
      > - Nights number:  true
      > - Location:  true
      > - checking date:  true
![enter image description here](https://i.imgur.com/gWu9FLz.png)


- **User says "book a 3 nigth in miami":**
  - **DialogFlow:** 
      >Intent detection: BookHotel
      > Confidence: 0.52
      > Entity detection: 
      > - Nights number:  true
      > - Location:  true
    > ![enter image description here](https://i.imgur.com/Zwundtc.png)
    
  - **Lex:** 
      >Intent detection: fallback intent
      > Confidence: None
      > Entity detection: 
      > - Nights number:  false
      > - Location:  false 
	>![enter image description here](https://i.imgur.com/PwePlGD.png)
   - **Luis.ia:**
      >Intent detection: BookHotel
      > Confidence: 0.87
      > Entity detection: 
      > - Nights number:  true
      > - Location:  true
![enter image description here](https://i.imgur.com/79nFI90.png)


## Conclusions:

**DialogFlow:**
- Pros
    - Detects spelling mistakes very well
    - It has a big synonyms repertory
    - The standard edition is free
    - I allows to associate several languages to the same bot
- Cons
    - It is not fully multilanguage since you have to specify the language in each request

**Amazon Lex:**
- Pros
    - It can be useful for customers with infrastructure in Amazon
    - It is a tool very similar to DialogFlow
- Cons
    - Does not have a wide repertoire of synonyms
    - Cannot identify words when they are written with spelling errors
    - It may take longer than the other platforms when the model is being trained
    - It only allows the use of the English language for bots

**Luis.ia:**
- Pros
    - Detects spelling mistakes very well
    - It can detect many unspecified entities
    - It has a very easy to consume API
    - Gives information of other intents in relation to the identified
- Cons
    - Since it detects many entities it can be complicated to obtain the necessary data
    - It does not have the ability to respond to messages such as DialogFlow and Amazon Lex, which is why it should be used in the company of the Microsoft Questions & Answers tool
    - Unable to respond, it does not have the ability to ask for the missing information
    - It does not allow to associate several languages to the same bot


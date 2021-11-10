class Game:
    def __init__(self):
        self.intro()
    
    def intro(self):
        print(''' 
        Welcome to your next adventure! In this game you will have a series of exciting and thrilling decisons to make. 
        If you make these decisions right, than you will prosper in the end, if not?
        Well, I'll let you figure that out for yourself.
        
        You are a BYU-I student on your first day of freshman year! YAY! So exciting
        
        Let's start''')

        self.question1()

    def question1(self):
        print('''
        Good morning and welcome to your first day! Today you are tasked with decisions
        that will affect how you make it through your day.

        Here is your first decision of your first day! Your choices are

        A - Leave earlier for your class at 8:30am, and grab breakfast at the Manwaring Center on your way over there.
        B - Sleep in a little and DoorDash your breakfast.
        C - Wake up, shower quickly, and grab a bowl of cereal before you leave for class.
        ''')

        self.answer1 = input()
        self.check1()
        
    
    def check1(self):
        if self.answer1.lower() == "a":
            print("  you will walk into another class that is halfway done it’s lecture, and act as if you are a part of the class to save face.\n The professor then calls on you for your input on a topic you know nothing about.\n This then causes you grief and embarrassment. ")
        elif self.answer1.lower() =="b":
            print("  while you are enjoying your breakfast from Taco Bell, you see that you’ve taken your sweet time!\n You rush to your car just to get stuck in the student traffic, and an accident at the intersection by Hemming Village.\n You make it to class in time for the last 20 minutes of the lecture. ")
        elif self.answer1.lower() == "c":
            print("  You make it to class 10 minutes early; enough time to secure your seat in the classroom.\n However, the cereal didn’t really fill you up, and your stomach\n growls very loudly during the spiritual thought, and everyone looks at you. ")
        else:
            print("  Sorry I don't know what that is. please try again")
            self.answer1 = input()
            self.check1()

char = Game()
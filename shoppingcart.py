def line_spaces(args):
    i = 0
    print("  ")
    while i < (args):
        i = i + 1


print(" Welcome to our Shopping Cart Program! We're so happy you're here. ")
add_item = "Add Item"
view_cart = "View Cart"
remove_item = "Remove Item"
compute_total = "Compute Total"
quit = "Quit"


def list_items():
    print("Bed")
    print("Nightstand")
    print("Dresser")
    print("Mirror")
    print("Door Shoe Rack")
    line_spaces(1)
    list_select = input()
    if list_select.lower() == "bed":
        line_spaces(1)
        print(" You have now added a Bed to your cart! ")
    elif list_select.lower() == "nightstand":
        line_spaces(1)
        print(" You have now added a Nightstand to your cart! ")
    elif list_select.lower() == "dresser":
        line_spaces(1)
        print(" You have now added a Dresser to your cart! ")
    elif list_select.lower() == "mirror":
        line_spaces(1)
        print("You have now added a Mirror to your cart! ")
    elif list_select.lower == "door shoe rack":
        line_spaces(1)
        print(" You have now added a Door Shoe Rack to your cart! ")
    else:
        line_spaces(1)
        print(" That is not an option. ")



def options_menu():

    print(" Please select one of the following options: ")
    print(f"1. {add_item}")
    print(f"2. {view_cart}")
    print(f"3. {remove_item}")
    print(f"4. {compute_total}")
    print(f"5. {quit}")
    options_selec = input()
    if options_selec == "1" or options_selec == "add item":
        line_spaces(1)
        cart_value = []
        for i in range(4):
            list_items()
            cart_value.append( input(" What would you like to add to your cart? "))
            break
        for p in cart_value:
            print(f" You have {p} in your cart." )
        options_menu()
    elif options_selec == "2" or options_selec == "view cart":
        print(" Your cart currently contains: ")
        line_spaces(1)
        options_menu()
    elif options_selec == "3" or options_selec == "remove item":
        print(" Which item do you want removed? ")
        options_menu()
    elif options_selec == "4" or options_selec == "compute total":
        print(" Okay! You're total is: ")
        options_menu()
    elif options_selec in {"quit", "Quit", 5}:
        print("Thanks for shopping with us! ")
    else: 
        print("That isn't an option, sorry.")




options_menu()
line_spaces(2)
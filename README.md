## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.


This is new to me, I almost never plan anything. I guess I'll add the html stuff, buttons and images and data and whatnot. After that, I'll pull those HTML elements into JS and then make a couple of functions that will track the pokemon caught and seen, push new things to my array if I need to, and generate new wild pokemon. If I'm being realistic, I'll just TDD everything at the end as an afterthought. This wasn't very technical, but I just want to get to working instead of writing this. I get the point of planning when coding, I learned that when I tried to make a sodoku solver through brute force loops and no recursiveness, but this isn't complex math and I don't need recursion. I can just start coding from the start and get to the end and there aren't any areas that I can see that will make me regret how I coded proir to that point. I won't be like "woah, this is an unexpected complexity" (not that I talk that way) but when I think something like that is possible, then I plan.

Edit: Planning might have helped here, I'm not sure. I made at least one mistake that I had to backtrack on but I'm also not sure if I would have avoided it through planning. I also added recursion for the fun of it because I said I didn't need it.
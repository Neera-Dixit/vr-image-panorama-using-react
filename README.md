Create a react application in which you need to call `https://jsonplaceholder.typicode.com/users` and render data returned from this API.

Iterate over this data and render the data as a card stack. Each card should show `email` and `name` of the user.

At this point of time your application should look something like.

[Imgur](http://i.imgur.com/zoQubOU.png)

Now if you click on any one of the cards, it should open up and give a detailed view which should show following:-


1. address

2. website

3. 3 nearest users to the user in context. You can use latitude and longitude to get coordinates of the each user from "geo" object. (Hint: You can use `haversine` formula)

At this point of time your application should be something like.

[Imgur](http://imgur.com/a/xhlb0)


Please incorporate following in your application:-

1. Call the API and store the data in your state(you can use flux, redux anything which you like for state management).
2. Read data in your components from your state.
3. Use package.json(I want to see what packages you are using)
4. Use webpack to compile your javascript files.(Provide 2 different files for development and production environments).
5. Use webpack dev server and hot reloading for live reloading.
6. Provide comments wherever required.
7. Add test cases for the checking following scenarios:-
    1. components are rendered properly or not
    2. create a mock api data and check if component renders properly when you pass the mock data instead of actual api call.
    



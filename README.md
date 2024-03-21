Main Idea : To maintain a clean structure where every piece will do the work what it designed todo. a component will responsible for rendering the jsx, in similar fashion every server / hook will be doing what it is meant for.

File Structure

Contexts
--> Context will provide data to all the tree

Axios
--> Creating Axios instance and adding base urls
--> adding request and response interceptors via custom hook, bcoz to make clean-up

Custom Hooks
--> If the jsx is common we place it as common component, if logic is common we place it at custom hook.
--> Custom hooks are just like normal utility functions, why they preferred is they can have access as same as components, so we can move logic out of the component
--> useFetch is on top of axios, and it will provide data, loading, error and a function to call the api to the component.
--> useReactQuery provides two functions, useGetQuery and mutation, this also did same as useFetch with extra features.


Services for packages
--> Basic idea is to write entire package related functions in one place, so that we can address all at a single place.
--> functions related to local storage all written at one place.
--> same for toasts
--> So for every 3rd party package we need to maintain this service file, so that we can change as per our requirement.

Routing 
--> After login success we always check for the state , if it is null then it will go to home, otherwise it will go that state.
--> We can define routes, dynamic routes and get those values by useParams Hook, we can define nested routes.
--> Routes can be used for common path and also for common layout. if you pass only element then it is a layout, if you pass only the path then it is only for nesting.
--> Layout is concept that it can be common component for couple of routes. inside layout we can define outlet and our wrapped routes, outlet will act as placeholder.
--> we can pass state when we are navigating from one route to another. 

SearchParams:
--> As useParams we have one more hook useSearchParams it is like useState , we can put any data and that will be added to our url at the top, and it can be preserved across refreshes. it can be mainly used for search strings and filters where we can share the link to anyone and they can easily see what we are seeing.
--> We can also use this as state across some compoents, we can have filters and search in any other components and our data that needs to be filtered is in a different component, so this works.
--> It is a go to method for state across a single route/page where we share data among components

Protected Routes:
--> Protected Route is an Layout similar to headerLayout, where we wrap the routes using route and provide the element and we place one placeholder(outlet) and we check for a condition render the outler or navigate to login.

React Query:

React HookForm:


Error Boundary:

Redux toolkit:

Environment variables:
--> Vite uses import.meta.env.VITE_URL, 
--> VITE prefix is needed. 
--> By default for dev development is taken and for build production is taken.
--> .env.development, .env.production, .env.staging we can pass mode in scripts.
--> similarly .env.development.local has high priority when app running in local and it will be ignored by gitignore.
--> .env loading in call cases. .env.local loaded in all cases and ignored by git. .env[mode] loaded in specific mode, .env[mode].local loaded in specific mode and ignored by git
--> import.meta.env.MODE gives you MODE. import.meta.env.PROD and DEV gives you boolean.

Json Server
--> It can be used as a server.
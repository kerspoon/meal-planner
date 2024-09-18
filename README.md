This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# running

- `npm run build, npm run static` builds the app into a static web app and serves the HTML from `./out` on [http://localhost:8080](http://localhost:8080)
- `npm run dev` builds and serves an auto reloading version of the app. Open [http://localhost:3000](http://localhost:3000)

# deploying

- `git checkout gh-pages` get the branch that Github is set to look at
- `git merge master` merge the new changes from the master branch
- `npm run build` build the new version
- `rmdir docs -r; mv out docs` move the contents of the output folder into docs (which for some unknown reason is one of the two places github can look for the content, the other being the root, I don't want everything to be served hence I need the output in docs)
- `git commit -am "updated gh-pages"` commit the new files from the build
- `git push` push the changes to github, which will kick off a build action to deploy the site.

# to do

- some better interface for showing the recipies.
 + add a search bar the looks in the ingredients and the title
- replace title as tooltip with an ⓘ &#9432 as a button that shows a div with the info.
- add photos of the meals, then an interface to select a meal via a full screen grid of photos.
- add the ability to add your own recipies. a simple copy paste of the JSON into a text box that adds to a list where you can delete too. Then add guidance for the genAI prompt. 

# dont do

- fix the data format of the recipies etc. (this wont help unless I *need* to do the other "don't do" things.)
    ```
    const recipiesDb = {
      1: { name: "", catagory: 1, ingrediends: [{id: 1, quantity: 400, units: "g", details: "chopped"}, instructions: "", photos: ["asgid.png"]] }
    }
    const recipies_idx_name = {
        "Egg Fried Rice": 1
    }
    const ingredients = {
        1: { name: "", fodmap: 1, fodmap_comment: ""}
    }
    ```
- add a simple backend using sqlite or similar.
- make multi user. storing recipies and weekly meals and shopping list ticks.

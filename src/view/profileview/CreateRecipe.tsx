import './CreateRecipe.css'

export const CreateRecipe = () => {
    return (
        <div className="createRecipeWrapper">
            <h1 className="pageTitle">Create recipe</h1>
            <div className="createRecipeComponent">
                <form>
                    <label>Recipe Title</label><br />
                    <input type="text" /><br />
                    <label>Recipe Image</label><br />
                    <input type="file" /><br />
                    <label>Recipe Categories</label><br />
                    <input type="checkbox" name="vegetarian" id="vegetarian" value="vegetarian"/>
                    <label htmlFor="vegetarian">Vegetarian</label><br />
                    <input type="checkbox" name="pescetarian" id="pescetarian" value="pescetarian"/>
                    <label htmlFor="pescetarian">Pescetarian</label><br />
                    <input type="checkbox" name="meat" id="meat" value="meat"/>
                    <label htmlFor="meat">Meat FTW</label><br />
                    <label>Ingredients</label><br />
                    <input type="text" placeholder="1"/><br />
                    <input type="text" placeholder="2"/><br />
                    <input type="text" placeholder="3"/><br />
                    <input type="text" placeholder="4"/><br />
                    <input type="text" placeholder="5"/><br />
                    <input type="text" placeholder="6"/><br />
                    <input type="text" placeholder="7"/><br />
                    <input type="text" placeholder="8"/><br />
                    <input type="text" placeholder="9"/><br />
                    <input type="text" placeholder="10"/><br />
                    <label>Instructions</label><br />
                    <input type="text" placeholder="1"/><br />
                    <input type="text" placeholder="2"/><br />
                    <input type="text" placeholder="3"/><br />
                    <input type="text" placeholder="4"/><br />
                    <input type="text" placeholder="5"/><br />
                    <input type="text" placeholder="6"/><br />
                    <input type="text" placeholder="7"/><br />
                    <input type="text" placeholder="8"/><br />
                    <input type="text" placeholder="9"/><br />
                    <input type="text" placeholder="10"/><br />
                    <input type="submit"/><br />
                </form>
            </div>
        </div>
    )
}

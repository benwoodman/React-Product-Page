// ProductCatalog: Contains a grid of multiple ProductTiles
class ProductCatalog extends React.Component {

    // Creates a ProductTile object to be rendered
    renderTile = (current_item) => {
        return <ProductTile product={current_item}></ProductTile>;
    }

    // Iterates through the product list and calls the renderTile
    // method to create the ProductTile object
    render() {
        let tiles = [];
        for (let i = 0; i < this.props.products.length; i++) {
            const current_item = this.props.products[i];
            tiles.push(this.renderTile(current_item));
        }
        return tiles;
    }
}

// ProductTile: A Bulma box containing information about a specific product
class ProductTile extends React.Component {

    // Renders the ProductTile with Product Information
    render() {
        return (
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={this.props.product.image} alt="Placeholder image"></img>
                    </figure>
                </div>
                <div class="card-content">
                    <p class="title product-title">{this.props.product.name}</p>

                    <div class="content">
                        {this.props.product.short_description}
                        <br></br>
                    </div>
                    <a class="button is-primary" href={"product.html?id=" + this.props.product.id.toString()} target="_blank">
                        <strong>More Details</strong>
                    </a>
                </div>
            </div>
        )
    }
}
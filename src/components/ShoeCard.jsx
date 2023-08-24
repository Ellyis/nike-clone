const ShoeCard = ({ shoe, changeBigShoeImage, bigShoeImage }) => {
    const handleClick = () => {
        if (bigShoeImage !== shoe.bigShoe) {
            changeBigShoeImage(shoe.bigShoe)
        }
    }
    
    return (
        <div className={`border-2 rounded-xl cursor-pointer max-sm:flex-1
            ${bigShoeImage === shoe.bigShoe
                ? 'border-coral-red'
                : 'border-transparent'
            }`}>
            <div className="flex justify-center items-center bg-card bg-center
            bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4"
            onClick={handleClick}>
                <img 
                    src={shoe.thumbnail} alt="thumbnail"
                    width={127} height={103}
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default ShoeCard
import Image from "next/image";

function RecipeCard({ label, image, mealType }) {
  return (
    <>
      <div class="relative border-2 border-neutral-950 rounded-xl w-60 h-32">
        <Image
          className="rounded-xl object-cover "
          src={image}
          alt="card-image"
          fill
        />
      </div>
      <h5 class="">{label}</h5>
      <h5 class="">{mealType}</h5>
    </>
  );
}

export default RecipeCard;

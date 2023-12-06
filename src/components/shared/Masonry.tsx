export default function Masonry({ images }: { images: string[] }) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-4">
      {images.map((image) => (
        <img src={image} alt="image" className="object-contain" />
      ))}
    </div>
  );
}

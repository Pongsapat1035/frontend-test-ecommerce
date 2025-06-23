import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";

export default function ProductImage({ images }: { images: string[] }) {
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [thumbnails, setThumbnails] = useState<string[]>([]);

  function handleThumbnailClick(clickedImage: string) {
    setThumbnails((prev) => {
      const newThumbs = prev.filter((img) => img !== clickedImage);
      newThumbs.push(mainImage ?? "");
      return newThumbs;
    });

    setMainImage(clickedImage);
  }

  useEffect(() => {
    if (images && images.length > 0) {
      setMainImage(images[0]);
      setThumbnails(images.slice(1));
    }
  }, [images]);
  
  return (
    <Grid container size={{ sm: 12, md: 6 }} spacing={2} direction="column" sx={{ p: { xs:2, sm: 4, md: 0 } }}>
      <Grid size={12} sx={{ height: { xs: 400, sm: 500 }, borderRadius: 2, overflow: "hidden" }}>
        <img
          src={mainImage ?? ""}
          alt="product-image"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Grid>
      <Grid container size={12} spacing={2}>
        {thumbnails.map((thumb, index) => (
          <Grid
            key={index}
            size={4}
            sx={{
              cursor: "pointer",
              height: { xs: 140, sm: 160 },
              borderRadius: 1,
              overflow: "hidden",
            }}
            onClick={() => handleThumbnailClick(thumb)}>
            <img
              src={thumb}
              alt={`thumbnail-${index}`}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}


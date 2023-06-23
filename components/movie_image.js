import Image from 'next/image'

export default function Movie_Image({poster_path, className, width, height}) {
    if (poster_path == null){
        return <></>;
    }

    return <Image className={className} src={"https://image.tmdb.org/t/p/original"+poster_path} width={width || 400} height={height || 600} alt="Movie Poster" />;
}
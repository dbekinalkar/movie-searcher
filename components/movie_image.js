import Image from 'next/image'

export default function Movie_Image({poster_path, className, fill}) {
    if (poster_path == null){
        return <></>;
    }

    if (fill){
        return <Image className={className} src={"https://image.tmdb.org/t/p/original"+poster_path} fill={true} alt="Movie Poster" />;
    }

    // eslint-disable-next-line @next/next/no-img-element
    return <img className={className} src={"https://image.tmdb.org/t/p/original"+poster_path}alt="Movie Poster" />;
}
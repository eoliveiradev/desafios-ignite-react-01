import { useEffect, useState } from "react"
import { GenreResponseProps } from "../App"
import { api } from "../services/api"
import { Button } from "./Button"

interface SideBarProps {
  selectedGenreId: number
  onNavClick: (genreId: number) => void
}

export function SideBar(props: SideBarProps) {
  const { onNavClick, selectedGenreId } = props

  const [genres, setGenres] = useState<GenreResponseProps[]>([])

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    < nav className="sidebar" >
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onNavClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav >
  )
}
import { Button, Flex } from '@chakra-ui/react'
import { useMemo } from 'react'
import { useInfiniteQuery } from 'react-query'
import { Header } from '../components/Header'
import { CardList } from '../components/CardList'
import { Loading } from '../components/Loading'
import { Error } from '../components/Error'
import { getImage } from '../services/images'
import { IImage } from '../@types/interfaces'

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    {
      queryKey: ['images-infinite-query'],
      queryFn: async ({ pageParam = undefined }) => getImage({ after: pageParam }),
      getNextPageParam: (lastPage) => lastPage.after,
    }
  )

  const formattedData: IImage[] = useMemo(() => {
    if (!data) return []

    return data.pages.map((page) => page.data).flat()
  }, [data])

  return (
    <>
      <Header />

      <Flex
        maxW={1120}
        px={20}
        mx="auto"
        my={20}
        direction="column"
        justify="start"
        align="start"
        gridGap={{ base: 4, md: 10 }}
      >
        {
          isLoading ? <Loading /> : isError ? <Error /> : <CardList cards={formattedData} />
        }
        {
          isFetchingNextPage
            ? <Loading />
            : hasNextPage && <Button onClick={() => fetchNextPage()}>Carregar mais</Button>
        }
      </Flex>
    </>
  )
}

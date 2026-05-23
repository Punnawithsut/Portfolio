import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

interface CardBlockProps {
    imgUrl: string | null,
    cardTitle: string,
    cardDescription: string,
    badgeText: string,
    badgeVariant?: "link" | "default" | "outline" | "secondary" | "ghost" | "destructive" | null | undefined,
};

export function CardBlock({ 
    imgUrl, 
    cardTitle, 
    cardDescription, 
    badgeText, 
    badgeVariant = "secondary" 
}: CardBlockProps) {
    return (
        <Card className='mx-auto w-full max-w-sm overflow-hidden'>
            <div className='relative aspect-video w-full bg-muted flex items-center justify-center'>
                {imgUrl ? (
                    <>
                        <div className='absolute inset-0 z-10 bg-black/35'/>
                        <Image src={imgUrl} alt={cardTitle} fill className='object-cover' />
                    </>
                ) : (
                    <span className="text-muted-foreground text-sm font-medium">No Image</span>
                )}
            </div>

            <CardHeader>
                <div className='flex flex-row justify-between items-center w-full'>
                    <CardTitle className='text-2xl font-bold'>{cardTitle}</CardTitle>
                    <div className='flex flex-col h-full items-center justify-center'>
                        <Badge className='justify-center items-center text-sm' variant={badgeVariant ? `${badgeVariant}` : 'secondary'}>{badgeText}</Badge>
                    </div>
                </div>
                <CardDescription>{cardDescription}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className='w-full cursor-pointer' variant={'secondary'}>View Project</Button>
            </CardFooter>
        </Card>
    );
}
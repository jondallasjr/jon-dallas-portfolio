import { markdownToHtml } from '@/lib/markdownToHtml';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function PrivacyPolicy() {
  const content = await markdownToHtml('src/content/terms-of-service.md');

  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Terms of Service</CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        </CardContent>
      </Card>
    </div>
  );
}
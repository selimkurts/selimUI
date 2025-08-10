"use client";
import React from 'react';
import { Alert, Badge, Avatar, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Spinner, Skeleton, Progress, Button, ToastProvider, useToast } from '@selim-ui/react';

function ToastButtons() {
  const { addToast } = useToast();
  return (
    <div className="flex gap-2">
      <Button onClick={() => addToast({ title: 'Saved', description: 'Your changes have been saved', variant: 'success', durationMs: 3000 })}>Success toast</Button>
      <Button variant="outline" onClick={() => addToast({ title: 'Warning', description: 'Be careful', variant: 'warning' })}>Warning toast</Button>
    </div>
  );
}

export function FeedbackDemo() {
  return (
    <ToastProvider>
      <div className="space-y-6">
        <div className="flex gap-2 items-center flex-wrap">
          <Badge>Neutral</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Avatar name="Selim UI" />
          <Spinner />
          <Skeleton style={{ width: 120, height: 16 }} />
          <Progress value={42} style={{ width: 160 }} />
        </div>
        <Alert heading="Information">This is an info alert</Alert>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card content goes here.</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
            <Button variant="outline">Cancel</Button>
          </CardFooter>
        </Card>
        <ToastButtons />
      </div>
    </ToastProvider>
  );
}


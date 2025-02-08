import React from 'react';
import Chat from '@/components/chat/chat';
import API_ERROR_MESSAGE from '@/constants/api-error-message';
import { AxiosError } from 'axios';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  statusCode?: number;
}

class APIErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: AxiosError) {
    return { hasError: true, statusCode: error.status };
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    switch (this.state.statusCode) {
      case 400:
        return <Chat role="system">{API_ERROR_MESSAGE[400]}</Chat>;
      case 404:
        return <Chat role="system">{API_ERROR_MESSAGE[404]}</Chat>;
      case 500:
        return <Chat role="system">{API_ERROR_MESSAGE[500]}</Chat>;
      default:
        return <Chat role="system">{API_ERROR_MESSAGE['default']}</Chat>;
    }
  }
}

export default APIErrorBoundary;

  // tslint:disable-next-line
import CoreV1Api from 'cross-kube/lib/apis/CoreV1Api';
  // tslint:disable-next-line
import V1Pod from 'cross-kube/lib/models/V1Pod';
  // tslint:disable-next-line
import V1PodList from 'cross-kube/lib/models/V1PodList';
import React from 'react';
import logo from './react.svg';

import './Home.css';

interface HomeState {
  error: Error | undefined;
  isLoaded: boolean;
  items: V1Pod[];
}

declare var window: {
  __SSR_DATA__: V1PodList | undefined;
};

const defaultState: HomeState = {
  error: undefined,
  isLoaded: false,
  items: []
};

class Home extends React.Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);

    this.state = defaultState;
  }

  public componentDidMount() {
    const data = window.__SSR_DATA__;
    console.debug('SSR data', data);
    if (data) {
      this.setState({
        error: undefined,
        isLoaded: true,
        items: data.items
      });
      delete window.__SSR_DATA__;
    } else {
      const api = new CoreV1Api('http://localhost:3000');
      api.listPodForAllNamespaces({}).then(
        (podList: V1PodList) => {
          this.setState({
            error: undefined,
            isLoaded: true,
            items: podList.items
          });
        },
        (error: Error) => {
          this.setState({
            error,
            isLoaded: true
          });
        }
      );
    }
  }

  private renderPod(item: V1Pod) {
    return <li key={`item-${item.metadata!.uid}`}>{item.metadata!.name}</li>;
  }

  public render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>React App built with cross-kube and Razzle</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.tsx</code> or <code>src/Home.tsx</code> and save to
          reload.
        </p>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
        <div className="Home-example">
          <h2>All Pods</h2>
          <ul>{this.state.items.map(item => this.renderPod(item))}</ul>
        </div>
      </div>
    );
  }
}

export default Home;
